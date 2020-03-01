# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# create users
users = []

20.times do
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

50.times do
  l = {
    title: Faker::Lorem.sentence(word_count: 3),
    owner_id: rand(1..20)
  }

  lists << List.create!(l)
end

# create gifts
gifts = []

200.times do
  g = {

  }

  gifts << Gift.create!(g)
end
