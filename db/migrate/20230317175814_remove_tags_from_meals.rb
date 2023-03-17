class RemoveTagsFromMeals < ActiveRecord::Migration[7.0]
  def change
    remove_column :meals, :tags, :string
  end
end
