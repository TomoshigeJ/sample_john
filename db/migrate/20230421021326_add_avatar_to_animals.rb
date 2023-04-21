class AddAvatarToAnimals < ActiveRecord::Migration[5.2]
  def change
    add_column :animals, :avatar, :strings
  end
end
