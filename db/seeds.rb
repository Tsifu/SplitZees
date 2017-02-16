# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(username: "breakfast", password: "breakfast", email: "breakfast@gmail.com")
<<<<<<< HEAD
guest = User.create(username: "guest", password: "guest123", email: "guest@gmail.com")
=======
User.create(username: "guest", password: "guest123", email: "guest@gmail.com")
>>>>>>> 7c05678be9f2793ce514ce5a8e8ce036aadfed58

friends = []

10.times do |idx|
  friends << User.create(username: "User#{idx}", password:"password", email: "User#{idx}@gmail.com")
end

5.times do |idx|
<<<<<<< HEAD
  Friendship.create(user_id: guest.id, friend_id: friends[idx].id)
=======
  Friendship.create(user_id: 2, friend_id: friends[idx].id)
>>>>>>> 7c05678be9f2793ce514ce5a8e8ce036aadfed58
end
