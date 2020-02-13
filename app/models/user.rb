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
  # validates :password, length: { minimum: 8, allow_nil: true }

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
end
