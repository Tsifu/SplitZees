# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(username: "breakfast", password: "breakfast", email: "breakfast@gmail.com")
User.create(username: "guest", password: "guest123", email: "guest@gmail.com")

friends = []

10.times do |idx|
  friends << User.create(username: "User#{idx}", password:"password", email: "User#{idx}@gmail.com")
end

5.times do |idx|
  Friendship.create(user_id: 2, friend_id: friends[idx].id)
end
