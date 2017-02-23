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

  belongs_to :bill,
    class_name: "Bill",
    primary_key: :id,
    foreign_key: :bill_id

  has_one :financer,
    through: :bill,
      source: :payer

  def set_status
    self.paid = false
  end

  def self.record_bill(bill_id, owers)
    owers.each do |key, value|
      Ower.create(amount: value[:amount].to_f, user_id: value[:user_id].to_i, bill_id: bill_id, paid: false)
    end
  end

  def settle_bills_by_friend(ower_id, paid_date)
    receivables_by_friend = current_user.bills.joins(:owers).where(owers: { user_id: 1, paid: false })

    receivables_by_friend.each do |bill|
      ower = bill.owers.first
      ower.update(paid: true, paid_date: paid_date)
    end
  end

  def self.settle_individual_bill(bill_id, paid_date)
  end

end
