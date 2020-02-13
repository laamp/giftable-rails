# frozen_string_literal: true

# == Schema Information
#
# Table name: gifts
#
#  id           :bigint           not null, primary key
#  description  :text             not null
#  gift_img     :string
#  purchased    :boolean          default(FALSE), not null
#  creator_id   :integer          not null
#  recipient_id :integer          not null
#  list_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Gift < ApplicationRecord
  validates :description, :creator_id, :recipient_id, :list_id, presence: true

  belongs_to :creator,
             primary_key: :id,
             foreign_key: :creator_id,
             class_name: :User

  belongs_to :recipient,
             primary_key: :id,
             foreign_key: :recipient_id,
             class_name: :User

  belongs_to :list,
             primary_key: :id,
             foreign_key: :list_id,
             class_name: :List
end
