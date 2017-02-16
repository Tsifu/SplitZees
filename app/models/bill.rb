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
  
end
