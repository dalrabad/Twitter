user = User.create(email: 'fake@email.com', password: 'password')
count = 1
10.times do
  user.tweets.create(body: "tweet #{count}")
  count += 1
end

puts 'seeded data'
