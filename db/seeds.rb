puts "Clearing database..."

User.destroy_all
Meal.destroy_all
Review.destroy_all
Restaurant.destroy_all

puts "Seeding users..."

demo = User.create(username: 'Demo', password: 'demo123')
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
tto = Restaurant.create(name: 'The Turquoise Onion', address: '3 Oceanview Ln')



puts "Seeding meals..."

chp = Meal.create(name: 'Chicken Parmesan')
sph = Meal.create(name: 'Sweet Potato Hummus')
iws = Meal.create(name: 'Italian Wedding Soup')
nyss = Meal.create(name: 'New York Strip Steak')
sbp = Meal.create(name: 'Stuffed Bell Peppers')
slb = Meal.create(name: 'Salmon Burger')
css = Meal.create(name: 'Caesar Salad')
onr = Meal.create(name: 'Onion Rings')
sht = Meal.create(name: 'Shrimp Tacos')
dnv = Meal.create(name: 'Denver Omelette')
msc = Meal.create(name: 'Massaman Curry')
vg = Meal.create(name: 'Vegetable Gyoza')


puts "Seeding reviews..."

demo.reviews.create([
  { 
    content: "Rich and flavorful with only a mild kick. The chicken was incredibly tender; thigh meat if I'm not mistaken. It being my first time trying massaman curry, I don't feel qualified to crown this particular recipe over all others. However, in this humble reviewer's opinion, this dish is can't-miss.",
    image: 'https://www.wellplated.com/wp-content/uploads/2022/08/best-massaman-curry-recipe.jpg',
    rating: 5,
    price: 19.99,
    meal_id: msc.id,
    restaurant_id: ek.id
  },
  {
    content: "These were pretty spicy, but I personally love that. I typically try to steer clear of slaw (just a weird childhood thing I haven't been able to shake), but the garlic cilantro lime slaw in these tacos has opened my eyes a bit.",
    image: 'https://pinchofyum.com/wp-content/uploads/Shrimp-Tacos-with-Slaw-Square.jpg',
    rating: 4,
    price: 14.95,
    meal_id: sht.id,
    restaurant_id: gst.id
  },
  {
    content: 'This omelette endeavors to answer the age-old question: is there such a thing as too much cheese? The answer is yes. On a literal side note, I rather enjoyed the rosemary potatoes.',
    image: 'https://www.smalltownwoman.com/wp-content/uploads/2014/11/Denver-Omelette-DSC_0063.jpg',
    rating: 2,
    price: 16.98,
    meal_id: dnv.id,
    restaurant_id: ff.id
  },
  { 
    content: 'They may seem a little pricey, but can you really afford to put a dollar sign on perfection?',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/158875.jpg',
    rating: 5,
    price: 18.95,
    meal_id: vg.id,
    restaurant_id: ek.id
  },
  {
    content: 'An exquisite wagyu cut served with a perfectly complementary chimichurri. I might be back tomorrow!',
    image: 'https://imperialwagyubeef.com/wp-content/uploads/2020/11/Grilled-NY-Strip.jpg',
    rating: 5,
    price: 39.95,
    meal_id: nyss.id,
    restaurant_id: tto.id
  },
  {
    content: "The hummus by itself is... inoffensive. Let's call it a step above bland. It does pair extremely well with the real star of the show: cinnamon sugar-blasted pita chips.",
    image: 'https://img.delicious.com.au/Ff7QeQIy/del/2015/10/spiced-sweet-potato-hummus-21096-2.jpg',
    rating: 4,
    price: 15.00,
    meal_id: sph.id,
    restaurant_id: ek.id
  },
])
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
lisa.reviews.create([
  {
    content: "I usually don't eat at food trucks, but these were a delight! Maybe a little too crispy on some of them, but the top-quality soy sauce made up for it.",
    image: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/Vegetable-Gyozas.jpg?itok=lob-zLwT',
    rating: 4,
    price: 13.50,
    meal_id: vg.id,
    restaurant_id: gst.id
  },
  {
    content: 'More cinnamon sugar flatbread please! Oh, the hummus is nice too!',
    image: 'https://peasandcrayons.com/wp-content/uploads/2018/09/pumpkin-spice-sweet-potato-hummus-recipe-.jpg',
    rating: 5,
    price: 15,
    meal_id: sph.id,
    restaurant_id: ek.id
  },
  {
    content: 'I had to try it because it was anchovy-free! Not filling enough to be more than an appetizer, but definitely a palate-pleaser.',
    image: 'https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_2800,h_2800,c_limit/0328-ceasar-salad-lede.jpg',
    rating: 4,
    price: 9.99,
    meal_id: css.id,
    restaurant_id: tcg.id
  },
])
bart.reviews.create([
  {
    content: 'Man, these are thick! And the breading is so sweet!',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7f539fc41a5543aebfe03afed73a0b48/BFV9112_MozzarellaStickOnionRings.jpg',
    rating: 4,
    price: 10.98,
    meal_id: onr.id,
    restaurant_id: tsp.id
  },
  {
    content: "I don't know why I was expecting to see a fish sticking out from between two buns. That small disappointment aside, I really dug this! The pineapple salsa was the bomb.",
    image: 'https://kitchenconfidante.com/wp-content/uploads/2019/10/Thai-Salmon-Burgers-kitchenconfidante.com-2332.jpg',
    rating: 5,
    price: 24,
    meal_id: slb.id,
    restaurant_id: ff.id
  },
  {
    content: 'My two favorite foods in one, pizza and chicken nuggets! Unfortunately, a too-big wad of noodles distracted me from the main event...',
    image: 'https://assets.epicurious.com/photos/57bdeb19082060f11022b541/master/w_1000,h_667,c_limit/chicken-parmesan.jpg',
    rating: 3,
    price: 16,
    meal_id: chp.id,
    restaurant_id: ek.id
  },
])
marge.reviews.create([
  {
    content: 'It was lovely!',
    image: 'https://whatsgabycooking.com/wp-content/uploads/2020/01/WGC-Italian-Wedding-Soup-copy-2.jpg',
    rating: 5,
    price: 18.99,
    meal_id: iws.id,
    restaurant_id: tto.id
  },
  {
    content: 'They were lovely!',
    image: 'https://thecozycook.com/wp-content/uploads/2022/08/Stuffed-Bell-Peppers-f-500x500.jpg',
    rating: 5,
    price: 12.88,
    meal_id: sbp.id,
    restaurant_id: tn.id
  },
  {
    content: 'Too SPICY!',
    image: 'https://www.chilipeppermadness.com/wp-content/uploads/2022/06/Massaman-Curry-SQ.jpg',
    rating: 5,
    price: 19.99,
    meal_id: msc.id,
    restaurant_id: ek.id
  },
])
homer.reviews.create([
  {
    content: 'Mmmm, Denver omelette...',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/denver-omelet-18-1200.jpg',
    rating: 5,
    price: 18.99,
    meal_id: dnv.id,
    restaurant_id: tto.id
  },
  {
    content: 'Mmmm, onion rings...',
    image: 'https://www.vindulge.com/wp-content/uploads/2021/09/Smoked-Onion-Rings.jpg',
    rating: 5,
    price: 12,
    meal_id: onr.id,
    restaurant_id: gst.id
  },
  {
    content: 'Mmmm, shrimp tacos...',
    image: 'https://www.wellplated.com/wp-content/uploads/2018/04/Healthy-Shrimp-Tacos-with-Shrimp-Taco-Sauce.jpg',
    rating: 5,
    price: 16.88,
    meal_id: sht.id,
    restaurant_id: tn.id
  },
])

puts "Done!"
