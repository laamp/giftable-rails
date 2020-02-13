# frozen_string_literal: true

# == Schema Information
#
# Table name: users_to_lists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  list_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UsersToList < ApplicationRecord
  validates :user_id, :list_id, presence: true

  belongs_to :user,
             primary_key: :id,
             foreign_key: :user_id,
             class_name: :User

  belongs_to :list,
             primary_key: :id,
             foreign_key: :list_id,
             class_name: :List
end
