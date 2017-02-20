# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  email           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
	attr_reader :password

	validates :username, :password_digest, :email, :session_token, presence: true
	validates :email, uniqueness: true
	validates :password, length: { minimum: 6 }, allow_nil: :true

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

	has_many :friendships,
		class_name: "Friendship",
		primary_key: :id,
		foreign_key: :user_id

	has_many :friends,
		through: :friendships,
		source: :friend

	has_many :bills,
		class_name: "Bill",
		primary_key: :id,
		foreign_key: :payer_id

	has_many :debtors,
		through: :bills,
		source: :owers

	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return nil unless user && user.password_is?(password)
    user
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	def prospective_friends
		friends_id = User.find(self.id).friends.pluck(:id)
		friends_id_and_self = friends_id.push(self.id)
		User.where.not(id: friends_id_and_self)
	end

	def outstanding_receivables
		self.bills.where(paid: "false").include(:owers)
	end

	def outstanding_payables
		all_bills = Ower.where(payer_id: self.id).include(:bill)
		all_bills.select { |bill| bill.paid == false }
	end

	def bills_you_paid_and_settled
		self.bills.where(paid: "true").include(:owers)
	end

	def bills_you_owed_and_settled
		all_bills_you_owed = Ower.where(payer_id: self.id).include(:bill)
		all_bills_you_owed.select { |bill| bill.paid == true }
	end

	def ttl_amount(outstanding_rec_or_pay)
		bill_amounts = []
		outstanding_rec_or_pay.each do |bill|
			bill_amounts << bill.amount
		end

		bill_amounts.reduce(:+)
	end

	def friends_with_bill_detail(outstanding_bills)
		friends_who_owe_you = {}

		outstanding_bills.each do |bill|
			friends_who_owe_you[bill.user_id] = {
				bill_id: bill.id,
				amount: bill.amount,
				description: bill.description,
				bill_date: bill.date,
				paid: bill.paid
			}
		end

		friends_who_owe_you
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end
