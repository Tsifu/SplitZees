class NameChangeForOwer < ActiveRecord::Migration[5.0]
  def change
    rename_table :bill_owers, :owers
  end
end
