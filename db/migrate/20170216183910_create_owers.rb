class CreateOwers < ActiveRecord::Migration[5.0]
  def change
    create_table :owers do |t|
      t.float :amount, presence: true
      t.integer :bill_id, presence: true
      t.integer :user_id, presence: true
      t.boolean :paid, presence: true
      t.date :paid_date, presence: true
      t.timestamps
    end

    add_index :owers, :bill_id
    add_index :owers, :user_id
  end
end
