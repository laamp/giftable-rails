# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  profile_img     :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, :password_digest, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :created_lists,
           primary_key: :id,
           foreign_key: :owner_id,
           class_name: :List

  has_many :created_gifts,
           primary_key: :id,
           foreign_key: :creator_id,
           class_name: :Gift

  has_many :gifts,
           primary_key: :id,
           foreign_key: :recipient_id,
           class_name: :Gift

  has_many :users_to_lists,
           primary_key: :id,
           foreign_key: :user_id,
           class_name: :UsersToList

  has_many :lists,
           through: :users_to_lists,
           source: :list

  attr_reader :password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    user if user&.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token
    self.session_token = generate_session_token
    save
    self.session_token
  end

  private

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
end
