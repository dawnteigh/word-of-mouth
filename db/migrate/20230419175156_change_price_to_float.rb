class ChangePriceToFloat < ActiveRecord::Migration[7.0]
  def change
    change_column :reviews, :price, :float
  end
end
