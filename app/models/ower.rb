# == Schema Information
#
# Table name: owers
#
#  id         :integer          not null, primary key
#  amount     :float
#  bill_id    :integer
#  user_id    :integer
#  paid       :boolean
#  paid_date  :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ower < ApplicationRecord
  validates :amount, :bill_id, :user_id, presence: true

  # Comment out after testing - commented out to test
  # seed data's relationship and model methods
  # after_create :set_status

  def set_status
    self.paid = false
  end

  belongs_to :bill,
    class_name: "Bill",
    primary_key: :id,
    foreign_key: :bill_id

  has_one :financer,
    through: :bill,
      source: :payer
end
