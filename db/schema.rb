# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_12_221732) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gifts", force: :cascade do |t|
    t.text "description", null: false
    t.string "gift_img"
    t.boolean "purchased", default: false, null: false
    t.integer "creator_id", null: false
    t.integer "recipient_id", null: false
    t.integer "list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_gifts_on_creator_id"
    t.index ["list_id"], name: "index_gifts_on_list_id"
    t.index ["recipient_id"], name: "index_gifts_on_recipient_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "event_date"
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_lists_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.string "profile_img"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "users_to_lists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id"], name: "index_users_to_lists_on_list_id"
    t.index ["user_id"], name: "index_users_to_lists_on_user_id"
  end

  add_foreign_key "gifts", "lists"
  add_foreign_key "gifts", "users", column: "creator_id"
  add_foreign_key "gifts", "users", column: "recipient_id"
  add_foreign_key "lists", "users", column: "owner_id"
  add_foreign_key "users_to_lists", "lists"
  add_foreign_key "users_to_lists", "users"
end
