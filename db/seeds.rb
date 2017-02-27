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

user1 = User.create!(username: "John", password: "John1234", email: "John@gmail.com")
guest = User.create!(username: "Guest", password: "guest123", email: "guest@gmail.com")

friend3 = User.create(username: "James", password: "password", email: "james@gmail.com")
friend4 = User.create(username: "Mary", password: "password", email: "mary@gmail.com")
friend5 = User.create(username: "Ethan", password: "password", email: "ethan@gmail.com")
friend6 = User.create(username: "Candice", password: "password", email: "candice@gmail.com")
friend7 = User.create(username: "Joe", password: "password", email: "joe@gmail.com")
friend8 = User.create(username: "Luke", password: "password", email: "luke@gmail.com")
friend9 = User.create(username: "Jennifer", password: "password", email: "jennifer@gmail.com")
friend10 = User.create(username: "Willis", password: "password", email: "willis@gmail.com")
friend11 = User.create(username: "Bruce", password: "password", email: "bruce@gmail.com")
friend12 = User.create(username: "Angela", password: "password", email: "angela@gmail.com")

friendship1 = Friendship.create!(user_id: guest.id, friend_id: friend3.id)
friendship2 = Friendship.create!(user_id: guest.id, friend_id: friend4.id)
friendship3 = Friendship.create!(user_id: guest.id, friend_id: friend5.id)
friendship4 = Friendship.create!(user_id: guest.id, friend_id: friend6.id)
friendship5 = Friendship.create!(user_id: guest.id, friend_id: friend7.id)
friendship6 = Friendship.create!(user_id: guest.id, friend_id: user1.id)

bill1 = Bill.create!(amount: 10, description: "Breakfast", bill_date: Date.parse("Feb 15 2017"), payer_id: guest.id, paid: false)
owe1 = Ower.create!(amount: -5, bill_id: bill1.id, user_id: friend3.id, paid: false)

bill2 = Bill.create!(amount: 20, description: "Books", bill_date: Date.parse("Feb 1 2017"), payer_id: guest.id, paid: false)
owe2 = Ower.create!(amount: -10, bill_id: bill2.id, user_id: friend3.id, paid: false)

bill3 = Bill.create!(amount: 10, description: "Lunch", bill_date: Date.parse("Jan 31 2017"), payer_id: guest.id, paid: false)
owe3 = Ower.create!(amount: -5, bill_id: bill3.id, user_id: friend4.id, paid: false)

bill4 = Bill.create!(amount: 30, description: "Drinks", bill_date: Date.parse("Feb 5 2017"), payer_id: guest.id, paid: false)
owe4 = Ower.create!(amount: -10, bill_id: bill4.id, user_id: friend5.id, paid: false)
owe5 = Ower.create!(amount: -10, bill_id: bill4.id, user_id: friend3.id, paid: false)

bill5 = Bill.create!(amount: 50, description: "Dinner", bill_date: Date.parse("Jan 4 2017"), payer_id: guest.id, paid: false)
owe6 = Ower.create!(amount: -25, bill_id: bill5.id, user_id: user1.id, paid: false)

bill6 = Bill.create!(amount: 60, description: "Movie", bill_date: Date.parse("Jan 15 2017"), payer_id: guest.id, paid: true)
owe7 = Ower.create!(amount: -15, bill_id: bill6.id, user_id: user1.id, paid: true, paid_date: Date.parse("Jan 16 2017"))
owe8 = Ower.create!(amount: -15, bill_id: bill6.id, user_id: friend4.id, paid: true, paid_date: Date.parse("Jan 21 2017"))
owe9 = Ower.create!(amount: -15, bill_id: bill6.id, user_id: friend5.id, paid: true, paid_date: Date.parse("Jan 25 2017"))

bill7 = Bill.create!(amount: 10, description: "Cupcakes", bill_date: Date.parse("Jan 13 2017"), payer_id: guest.id, paid: true)
owe10 = Ower.create!(amount: -5, bill_id: bill7.id, user_id: friend3.id, paid: true, paid_date: Date.parse("Jan 5 2017"))

bill8 = Bill.create!(amount: 32, description: "Zoo", bill_date: Date.parse("Jan 2 2017"), payer_id: guest.id, paid: true)
owe11 = Ower.create!(amount: -16, bill_id: bill8.id, user_id: friend6.id, paid: true, paid_date: Date.parse("Jan 21 2017"))

bill9 = Bill.create!(amount: 28, description: "Snacks", bill_date: Date.parse("Jan 18 2017"), payer_id: guest.id, paid: true)
owe12 = Ower.create!(amount: -14, bill_id: bill9.id, user_id: friend4.id, paid: true, paid_date: Date.parse("Jan 21 2017"))

bill10 = Bill.create!(amount: 100, description: "Drinks", bill_date: Date.parse("Jan 10 2017"), payer_id: guest.id, paid: true)
owe13 = Ower.create!(amount: -50, bill_id: bill10.id, user_id: friend3.id, paid: true, paid_date: Date.parse("Jan 13 2017"))

bill11 = Bill.create!(amount: 12, description: "Movie", bill_date: Date.parse("Feb 18 2017"), payer_id: friend3.id, paid: false)
owe14 = Ower.create!(amount: -6, bill_id: bill11.id, user_id: guest.id, paid: false)

bill12 = Bill.create!(amount: 24, description: "Cupcakes", bill_date: Date.parse("Feb 4 2017"), payer_id: friend4.id, paid: false)
owe15 = Ower.create!(amount: -12, bill_id: bill12.id, user_id: guest.id, paid: false)

bill13 = Bill.create!(amount: 62, description: "Zoo", bill_date: Date.parse("Feb 3 2017"), payer_id: friend3.id, paid: false)
owe16 = Ower.create!(amount: -31, bill_id: bill13.id, user_id: guest.id, paid: false)

bill14 = Bill.create!(amount: 70, description: "Snacks", bill_date: Date.parse("Feb 8 2017"), payer_id: friend5.id, paid: false)
owe17 = Ower.create!(amount: -35, bill_id: bill14.id, user_id: guest.id, paid: false)

bill15 = Bill.create!(amount: 120, description: "Drinks", bill_date: Date.parse("Jan 7 2017"), payer_id: user1.id, paid: false)
owe18 = Ower.create!(amount: -24, bill_id: bill15.id, user_id: guest.id, paid: false)
owe19 = Ower.create!(amount: -24, bill_id: bill15.id, user_id: friend3.id, paid: false)
owe20 = Ower.create!(amount: -24, bill_id: bill15.id, user_id: friend4.id, paid: false)
owe21 = Ower.create!(amount: -24, bill_id: bill15.id, user_id: friend5.id, paid: false)

bill16 = Bill.create!(amount: 15, description: "Movie", bill_date: Date.parse("Jan 18 2017"), payer_id: user1.id, paid: true)
owe22 = Ower.create!(amount: -7.50, bill_id: bill16.id, user_id: guest.id, paid: true, paid_date: Date.parse("Jan 20 2017"))

bill17 = Bill.create!(amount: 10, description: "Cupcakes", bill_date: Date.parse("Jan 16 2017"), payer_id: friend6.id, paid: true)
owe23 = Ower.create!(amount: -5, bill_id: bill17.id, user_id: guest.id, paid: true, paid_date: Date.parse("Jan 18 2017"))

bill18 = Bill.create!(amount: 20, description: "Zoo", bill_date: Date.parse("Jan 5 2017"), payer_id: friend3.id, paid: true)
owe24 = Ower.create!(amount: -10, bill_id: bill18.id, user_id: guest.id, paid: true, paid_date: Date.parse("Jan 7 2017"))

bill19 = Bill.create!(amount: 10, description: "Snack", bill_date: Date.parse("Jan 21 2017"), payer_id: friend4.id, paid: true)
owe25 = Ower.create!(amount: -5, bill_id: bill19.id, user_id: guest.id, paid: true, paid_date: Date.parse("Jan 23 2017"))

bill20 = Bill.create!(amount: 30, description: "Drinks", bill_date: Date.parse("Jan 13 2017"), payer_id: friend5.id, paid: true)
owe26 = Ower.create!(amount: -15, bill_id: bill20.id, user_id: guest.id, paid: true, paid_date: Date.parse("Jan 15 2017"))
