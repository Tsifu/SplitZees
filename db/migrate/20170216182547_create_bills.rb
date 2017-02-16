class CreateBills < ActiveRecord::Migration[5.0]
  def change
    create_table :bills do |t|
      t.float :amount, presence: true;
      t.string :description, presence: true;
      t.date :bill_date, presence: true;
      t.integer :payer_id, presence: true;
      t.boolean :paid, presence: true;
      t.timestamps
    end

    add_index :bills, :payer_id
  end
end
