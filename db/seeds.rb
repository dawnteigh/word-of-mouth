puts "Clearing database..."

User.destroy_all
Meal.destroy_all
Review.destroy_all
Restaurant.destroy_all

puts "Seeding users..."

jim = User.create(username: 'Jim', password: 'jim123')
mel = User.create(username: 'Mel', password: 'mel123')
bo = User.create(username: 'Bo', password: 'bo123')

puts "Seeding reviews..."


puts "Done!"
