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
end
