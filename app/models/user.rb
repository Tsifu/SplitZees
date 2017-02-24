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
		outstanding_receivables = {}

		bills = self.bills.includes(:owers).where(owers: { paid: false })

		bills.each do |bill|
			bill.owers.each do |ower|
				outstanding_receivables[ower.id] = {
					bill_id: bill.id,
					bill_date: bill.bill_date,
					bill_description: bill.description,
					ower_id: ower.id,
					owed_amount: -ower.amount,
					ower_userid: ower.user_id
				}
			end
		end

		outstanding_receivables
	end

	def outstanding_payables
		outstanding_payables = {}

		payables = Ower.includes(:bill).where("user_id = ? AND paid = ?", self.id, false)

		payables.each do |payable|
			outstanding_payables[payable.id] = {
				bill_id: payable.bill_id,
				bill_date: payable.bill.bill_date,
				bill_description: payable.bill.description,
				payer_id: payable.bill.payer_id,
				owed_amount: payable.amount,
			}
		end

		outstanding_payables
	end

	def settled_receivables
		settled_receivables = {}

		bills = self.bills.includes(:owers).where(paid: true)

		bills.each do |bill|
			bill.owers.each do |ower|
				settled_receivables[ower.id] = {
					bill_id: bill.id,
					bill_date: bill.bill_date,
					bill_description: bill.description,
					ower_id: ower.id,
					owed_amount: -ower.amount,
					ower_userid: ower.user_id,
					settled_date: ower.paid_date
				}
			end
		end

		settled_receivables
	end

	def settled_payables
		settled_payables = {}

		payables = Ower.includes(:bill).where("user_id = ? AND paid = ?", self.id, true)

		payables.each do |payable|
			settled_payables[payable.id] = {
				bill_id: payable.bill_id,
				bill_date: payable.bill.bill_date,
				bill_description: payable.bill.description,
				payer_id: payable.bill.payer_id,
				owed_amount: payable.amount,
				settled_date: payable.paid_date
			}
		end

		settled_payables
	end

	def outstanding_balances(balance_by_friends)
		total_owed_to_you = 0
		total_due_from_you = 0

		balance_by_friends.each do |key, value|
			if value > 0
				total_owed_to_you += value
			else
				total_due_from_you += value
			end
		end

		{
			netBalance: total_owed_to_you + total_due_from_you,
			youOwe: total_due_from_you,
			youAreOwed: total_owed_to_you
		}
	end

	def outstanding_balance_by_friends(receivables, payables)
		balance_by_friend = Hash.new(0)

		receivables.each do |key, value|
			balance_by_friend[value[:ower_userid]] += value[:owed_amount]
		end

		payables.each do |key, value|
			balance_by_friend[value[:payer_id]] += value[:owed_amount]
		end

		balance_by_friend
	end

	def bills_by_friend(receivables, payables)
		bills_by_friend = Hash.new { |h,k| h[k] = [] }

		receivables.each do |key, value|
			bills_by_friend[value[:ower_userid]] << value
		end

		payables.each do |key, value|
			bills_by_friend[value[:payer_id]] << value
		end

		bills_by_friend
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
