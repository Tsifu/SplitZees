class CreateFriends < ActiveRecord::Migration[5.0]
  def change
    create_table :friends do |t|
      t.integer :user_id, presence: true
      t.integer :friend_id, presence: true
      t.timestamps
    end

    add_index :friends, :user_id
    add_index :friends, :friend_id
  end
end
