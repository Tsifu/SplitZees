# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bill.destroy_all
Ower.destroy_all
Friendship.destroy_all

User.create!(username: "breakfast", password: "breakfast", email: "breakfast@gmail.com")
guest = User.create!(username: "guest", password: "guest123", email: "guest@gmail.com")

friends = []

10.times do |idx|
  friends << User.create!(username: "User#{idx}", password:"password", email: "User#{idx}@gmail.com")
end

5.times do |idx|
  Friendship.create!(user_id: guest.id, friend_id: friends[idx].id)
end

bill1 = Bill.create!(amount: 10, description: "breakfast", bill_date: Date.parse("Feb 15 2017"), payer_id: 2, paid: false)
owe1 = Ower.create!(amount: 5, bill_id: 1, user_id: 3, paid: false)

bill2 = Bill.create!(amount: 20, description: "books", bill_date: Date.parse("Feb 1 2017"), payer_id: 2, paid: false)
owe2 = Ower.create!(amount: 10, bill_id: 2, user_id: 3, paid: false)

bill3 = Bill.create!(amount: 10, description: "lunch", bill_date: Date.parse("Jan 31 2017"), payer_id: 2, paid: false)
owe3 = Ower.create!(amount: 5, bill_id: 3, user_id: 4, paid: false)

bill4 = Bill.create!(amount: 30, description: "drink", bill_date: Date.parse("Feb 5 2017"), payer_id: 2, paid: false)
owe4 = Ower.create!(amount: 10, bill_id: 4, user_id: 5, paid: false)
owe5 = Ower.create!(amount: 10, bill_id: 4, user_id: 3, paid: false)

bill5 = Bill.create!(amount: 50, description: "dinner", bill_date: Date.parse("Jan 4 2017"), payer_id: 2, paid: false)
owe6 = Ower.create!(amount: 25, bill_id: 5, user_id: 1, paid: false)

bill6 = Bill.create!(amount: 60, description: "movie", bill_date: Date.parse("Jan 15 2017"), payer_id: 2, paid: true)
owe7 = Ower.create!(amount: 15, bill_id: 6, user_id: 1, paid: true)
owe8 = Ower.create!(amount: 15, bill_id: 6, user_id: 4, paid: true)
owe9 = Ower.create!(amount: 15, bill_id: 6, user_id: 5, paid: true)

bill7 = Bill.create!(amount: 10, description: "cupcakes", bill_date: Date.parse("Jan 13 2017"), payer_id: 2, paid: true)
owe10 = Ower.create!(amount: 5, bill_id: 7, user_id: 3, paid: true)

bill8 = Bill.create!(amount: 32, description: "zoo", bill_date: Date.parse("Jan 2 2017"), payer_id: 2, paid: true)
owe11 = Ower.create!(amount: 16, bill_id: 8, user_id: 6, paid: true)

bill9 = Bill.create!(amount: 28, description: "snacks", bill_date: Date.parse("Jan 18 2017"), payer_id: 2, paid: true)
owe12 = Ower.create!(amount: 16, bill_id: 9, user_id: 4, paid: true)

bill10 = Bill.create!(amount: 100, description: "drinks", bill_date: Date.parse("Jan 10 2017"), payer_id: 2, paid: true)
owe13 = Ower.create!(amount: 50, bill_id: 10, user_id: 3, paid: true)

bill11 = Bill.create!(amount: 12, description: "movie", bill_date: Date.parse("Feb 18 2017"), payer_id: 3, paid: false)
owe14 = Ower.create!(amount: 6, bill_id: 11, user_id: 2, paid: false)

bill12 = Bill.create!(amount: 24, description: "cupcakes", bill_date: Date.parse("Feb 4 2017"), payer_id: 4, paid: false)
owe15 = Ower.create!(amount: 12, bill_id: 12, user_id: 2, paid: false)

bill13 = Bill.create!(amount: 62, description: "zoo", bill_date: Date.parse("Feb 3 2017"), payer_id: 3, paid: false)
owe16 = Ower.create!(amount: 31, bill_id: 13, user_id: 2, paid: false)

bill14 = Bill.create!(amount: 70, description: "snacks", bill_date: Date.parse("Feb 8 2017"), payer_id: 5, paid: false)
owe17 = Ower.create!(amount: 35, bill_id: 14, user_id: 2, paid: false)

bill15 = Bill.create!(amount: 120, description: "drinks", bill_date: Date.parse("Jan 7 2017"), payer_id: 1, paid: false)
owe18 = Ower.create!(amount: 24, bill_id: 15, user_id: 2, paid: false)
owe19 = Ower.create!(amount: 24, bill_id: 15, user_id: 3, paid: false)
owe20 = Ower.create!(amount: 24, bill_id: 15, user_id: 4, paid: false)
owe21 = Ower.create!(amount: 24, bill_id: 15, user_id: 5, paid: false)

bill16 = Bill.create!(amount: 15, description: "movie", bill_date: Date.parse("Jan 18 2017"), payer_id: 1, paid: true)
owe22 = Ower.create!(amount: 7.50, bill_id: 16, user_id: 2, paid: true)

bill17 = Bill.create!(amount: 10, description: "cupcakes", bill_date: Date.parse("Jan 16 2017"), payer_id: 6, paid: true)
owe23 = Ower.create!(amount: 5, bill_id: 17, user_id: 2, paid: true)

bill18 = Bill.create!(amount: 20, description: "zoo", bill_date: Date.parse("Jan 5 2017"), payer_id: 3, paid: true)
owe24 = Ower.create!(amount: 10, bill_id: 18, user_id: 2, paid: true)

bill19 = Bill.create!(amount: 10, description: "snack", bill_date: Date.parse("Jan 21 2017"), payer_id: 4, paid: true)
owe25 = Ower.create!(amount: 5, bill_id: 19, user_id: 2, paid: true)

bill20 = Bill.create!(amount: 30, description: "snack", bill_date: Date.parse("Jan 13 2017"), payer_id: 5, paid: true)
owe26 = Ower.create!(amount: 15, bill_id: 20, user_id: 2, paid: true)
