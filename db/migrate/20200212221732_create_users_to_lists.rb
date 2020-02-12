# frozen_string_literal: true

class CreateUsersToLists < ActiveRecord::Migration[5.2]
  def change
    create_table :users_to_lists do |t|
      t.integer :user_id, null: false
      t.integer :list_id, null: false

      t.timestamps
    end

    add_index :users_to_lists, :user_id
    add_foreign_key :users_to_lists, :users, column: :user_id

    add_index :users_to_lists, :list_id
    add_foreign_key :users_to_lists, :lists, column: :list_id
  end
end
