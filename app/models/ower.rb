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
      Ower.create(amount: value["amount"], user_id: value["user_id"], bill_id: bill_id, paid: false)
    end
  end

  def self.settle_bills_by_friend(friend_id, paid_date, current_user_id)
    current_user = User.find(current_user_id)
    receivables_by_friend = current_user.bills.joins(:owers).where(owers: { user_id: friend_id, paid: false }).includes(:owers)

    receivables_by_friend.each do |bill|
      ower = bill.owers.first
      ower.update(paid: true, paid_date: paid_date)
    end

    payables_to_friend = Ower.joins(:bill).where(owers: { user_id: current_user.id, paid: false }, bills: { payer_id: friend_id})

    payables_to_friend.each do |payable|
      payable.update(paid: true, paid_date: paid_date)
    end

  end

  def self.settle_individual_bill(bill_id, paid_date, ower_userid)
    ower = Ower.where("user_id = ? AND bill_id = ?", ower_userid, bill_id)
    ower.update(paid: true, paid_date: paid_date)
  end

end
