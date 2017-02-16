class NameChange < ActiveRecord::Migration[5.0]
  def change
    rename_table :friends, :friendships
    rename_table :owers, :bill_owers
  end
end
