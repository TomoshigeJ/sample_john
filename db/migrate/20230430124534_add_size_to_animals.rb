class AddSizeToAnimals < ActiveRecord::Migration[5.2]
  def change
    add_column :animals, :size, :integer, null: false, default: 0
  end
end
