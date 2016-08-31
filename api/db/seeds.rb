# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Boot.delete_all
Badge.delete_all

Boot.create(name: "Joe Bobo")
Boot.create(name: "Jane Goodness")

Badge.create(description: "Mostly likely to drink good coffee", boot_id: 2, total_votes: 3)
Badge.create(description: "Most likely to do somersaults", boot_id: 1, total_votes: 2)
Badge.create(description: "Most likely to take over th world", boot_id: 2, total_votes: 5)
Badge.create(description: "Most likely to eat greens", boot_id: 1, total_votes: 7)
