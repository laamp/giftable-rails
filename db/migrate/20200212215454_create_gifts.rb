# frozen_string_literal: true

class CreateGifts < ActiveRecord::Migration[5.2]
  def change
    create_table :gifts do |t|
      t.text :description, null: false
      t.string :gift_img
      t.boolean :purchased, null: false, default: false
      t.integer :creator_id, null: false
      t.integer :recipient_id, null: false
      t.integer :list_id, null: false

      t.timestamps
    end

    add_index :gifts, :creator_id
    add_foreign_key :gifts, :users, column: :creator_id

    add_index :gifts, :recipient_id
    add_foreign_key :gifts, :users, column: :recipient_id

    add_index :gifts, :list_id
    add_foreign_key :gifts, :lists, column: :list_id
  end
end
