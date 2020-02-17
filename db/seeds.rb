# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = { email: 'guest@giftable.com', name: 'Guest', password: 'password' }
user1 = User.create(user1)
user2 = { email: 'admin@giftable.com', name: 'Admin', password: 'password' }
user2 = User.create(user2)
user3 = { email: 'lance@giftable.com', name: 'Lance', password: 'password' }
user3 = User.create(user3)

list1 = { title: 'Guest List', owner_id: user1.id }
list2 = { title: 'Xmas 2020', owner_id: user3.id }
list3 = { title: 'Secret List', owner_id: user2.id }
List.create([list1, list2, list3])
