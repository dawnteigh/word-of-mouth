puts "Clearing database..."

User.destroy_all
Meal.destroy_all
Review.destroy_all
Restaurant.destroy_all

puts "Seeding users..."

jim = User.create(username: 'Jim', password: 'jim123')
mel = User.create(username: 'Mel', password: 'mel123')
bo = User.create(username: 'Bo', password: 'bo123')
lisa = User.create(username: 'Lisa', password: 'lisa123')
bart = User.create(username: 'Bart', password: 'bart123')
marge = User.create(username: 'Marge', password: 'marge123')
homer = User.create(username: 'Homer', password: 'homer123')

puts "Seeding restaurants..."

tsp = Restaurant.create(name: 'The Salty Pit', address: '343 Jackrabbit Rd')
tcg = Restaurant.create(name: '24 Carrot Gold', address: '667 Canada Dr')
sdg = Restaurant.create(name: 'Soup de Grâce', address: '1301 Grouse St')
ff = Restaurant.create(name: 'Fancy Feast', address: '721 Meow Ave')
ek = Restaurant.create(name: "Elle's Kitchen", address: '14 Maine Blvd')
tn = Restaurant.create(name: 'Taco Nuevo', address: '416 Austin Cir')
gst = Restaurant.create(name: 'Gastronauts', address: '88 Galaxy Pkwy')
ff = Restaurant.create(name: 'The Turquoise Onion', address: '3 Oceanview Ln')



puts "Seeding meals..."

chp = Meal.create(name: 'Chicken Parmesan')
sph = Meal.create(name: 'Sweet Potato Hummus')
iws = Meal.create(name: 'Italian Wedding Soup')
nyss = Meal.create(name: 'New York Strip Steak')
sbp = Meal.create(name: 'Stuffed Bell Peppers')
slb = Meal.create(name: 'Salmon Burger')
css = Meal.create(name: 'Caesar Salad')


puts "Seeding reviews..."

jim.reviews.create([
  { 
    content: 'This Chicken Parmesan is exactly what I would expect out of a place called "The Salty Pit".',
    image: 'http://3.bp.blogspot.com/_sEH2HX7urPI/TSJ5A9r7GqI/AAAAAAAAAQ8/T_yz3D4QRAY/s1600/Hope%2527s%2BCamera%2B002.JPG',
    rating: 1,
    price: 12.99,
    meal_id: chp.id,
    restaurant_id: tsp.id
  },
  {
    content: 'The hummus itself was super tasty, if a little on the spicy side. However, the pita bread that came with it could have been a little less tough, and a little more plentiful. I had to use my fingers to finish my hummus!',
    image: 'https://choosingchia.com/jessh-jessh/uploads/2020/10/roasted-sweet-potato-hummus-4-1.jpg',
    rating: 4,
    price: 10.95,
    meal_id: sph.id,
    restaurant_id: tcg.id
  },
  {
    content: 'The broth-to-everything-else ratio was astonishing; I could have gone swimming in the bowl they brought out, but I would have had to paddle for ages before I found anything to grab onto! The taste was adequate.',
    image: 'https://www.spendwithpennies.com/wp-content/uploads/2019/01/Italian-Wedding-Soup-2-700x826.jpg',
    rating: 3,
    price: 14.00,
    meal_id: iws.id,
    restaurant_id: sdg.id
  },
])
mel.reviews.create([
  {
    content: "I asked for medium rare, but the steak I got was more medium well. I won't be coming back.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ2kajiaxi1esUBy2dJotSTSGDpYCYJH5uw&usqp=CAU',
    rating: 1,
    price: 34.99,
    meal_id: nyss.id,
    restaurant_id: tsp.id
  },
  {
    content: 'WHAT ARE THESE FILLED WITH. I LOVE THEM.',
    image: 'https://bestbeefrecipes.com/wp-content/uploads/2021/08/keto-stuffed-peppers-featured.jpg',
    rating: 5,
    price: 13.00,
    meal_id: sbp.id,
    restaurant_id: tcg.id
  },
  {
    content: "Juiciest chicken parm I've ever had. The marinara sauce was delightfully sweet; grape jam perhaps? Bit heavy-handed on the basil though.",
    image: 'https://theeatdown.com/wp-content/uploads/Best-Chicken-Parmigiana-Recipes.jpg',
    rating: 4.5,
    price: 16.95,
    meal_id: chp.id,
    restaurant_id: ff.id
  },
])
bo.reviews.create([
  {
    content: "Let me preface this by saying that I absolutely cannot stand fish. However, the Salmon Burger at The Salty Pit had me swimming in a ocean of deliciousness! Much better than any beef burger I've ever eaten!",
    image: 'https://eatup.kitchen/wp-content/uploads/2019/06/Salmon-Burger-Web-470.jpg',
    rating: 5,
    price: 14.99,
    meal_id: slb.id,
    restaurant_id: tsp.id
  },
  {
    content: 'Et tu, Brute?',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/02/35/79/d3/sad-caesar-salad.jpg',
    rating: 2,
    price: 5.99,
    meal_id: css.id,
    restaurant_id: sdg.id
  },
  {
    content: 'Wow. You really get what you pay for here. And I RAREly feel that way when ordering steaks. Get it?',
    image: 'https://www.mychicagosteak.com/steak-university/wp-content/uploads/2022/03/hickory-grilled-new-york-strip-steak-2.jpg',
    rating: 5,
    price: 34.99,
    meal_id: nyss.id,
    restaurant_id: tsp.id
  },
])

puts "Done!"
