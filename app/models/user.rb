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

	def prospective_friends
		friends_id = User.find(self.id).friends.pluck(:id)
		friends_id_and_self = friends_id.push(own_id)
		User.where.not(id: friends_id_and_self)
	end
end
