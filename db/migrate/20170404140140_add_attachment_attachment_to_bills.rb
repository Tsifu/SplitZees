class AddAttachmentAttachmentToBills < ActiveRecord::Migration
  def self.up
    change_table :bills do |t|
      t.attachment :attachment
    end
  end

  def self.down
    remove_attachment :bills, :attachment
  end
end
