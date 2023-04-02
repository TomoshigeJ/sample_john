class User
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def say_hello
    puts "Hello, #{@name}!"
  end

  def change_name(new_name)
    @name = new_name
  end

  def self.create_with_random_name
    new_name = ("A".."Z").to_a.sample(8).join
    new_user = self.new(new_name)
    p new_user
  end
end

User.create_with_random_name
