# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  friend_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord
  validates :user_id, :friend_id, presence: true

  validates :user_id, uniqueness: { scope: :friend_id , message: "Once your friend, always your friend - No duplicates" }


  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :friend,
    class_name: "User",
    primary_key: :id,
    foreign_key: :friend_id
end
