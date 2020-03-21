# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# guest user
User.create({ email: 'guest@giftable.com', name: 'Guest', password: 'hunter12' })

# constants
NUM_USERS = 20
NUM_LISTS = 50
NUM_GIFTS = 200

# create users
users = []

NUM_USERS.times do
  fake_name = Faker::Name.name

  u = {
    email: Faker::Internet.email(name: fake_name, domain: 'giftable.com'),
    name: fake_name,
    password: 'password'
  }

  users << User.create!(u)
end

# create lists
lists = []

NUM_LISTS.times do
  l = {
    title: Faker::Lorem.sentence(word_count: 3),
    owner_id: rand(1..NUM_USERS)
  }

  lists << List.create!(l)
end

# create gifts
gifts = []

NUM_GIFTS.times do
  g = {
    description: Faker::Music.album,
    creator_id: rand(1..NUM_USERS),
    recipient_id: rand(1..NUM_USERS),
    list_id: rand(1..NUM_LISTS)
  }

  gifts << Gift.create!(g)
end

# users to lists
List.all.each do |l|
  User.all.each do |u|
    rand(2).zero? ? next : UsersToList.create(user_id: u.id, list_id: l.id)
  end
end
