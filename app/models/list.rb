# frozen_string_literal: true

# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  event_date :datetime
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :title, :owner_id, presence: true

  belongs_to :creator,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  has_many :gifts,
           primary_key: :id,
           foreign_key: :list_id,
           class_name: :Gift

  has_many :users_to_lists,
           primary_key: :id,
           foreign_key: :list_id,
           class_name: :UsersToList

  has_many :users,
           through: :users_to_lists,
           source: :user
end
