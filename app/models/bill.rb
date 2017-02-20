# == Schema Information
#
# Table name: bills
#
#  id          :integer          not null, primary key
#  amount      :float
#  description :string
#  bill_date   :date
#  payer_id    :integer
#  paid        :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bill < ApplicationRecord
  validates :amount, :description, :bill_date, :payer_id, presence: true

  # Comment out after testing - commented out to test
  # seed data's relationship and model methods
  # after_create :set_status

  def set_status
    self.paid = false
  end

  belongs_to :payer,
    class_name: "User",
    primary_key: :id,
    foreign_key: :payer_id

  has_many :owers,
    class_name: "Ower",
    primary_key: :id,
    foreign_key: :bill_id
end
