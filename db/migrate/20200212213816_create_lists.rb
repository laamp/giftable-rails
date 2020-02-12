# frozen_string_literal: true

class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.datetime :event_date
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :lists, :owner_id
    add_foreign_key :lists, :users, column: :owner_id
  end
end
