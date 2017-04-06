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

  has_attached_file :attachment, default_url: ""
  validates_attachment_content_type :attachment, content_type: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']

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
