json.friends do
  @friends.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :username, :email
    end
  end
end

json.prospectiveFriends do
  @prospective_friends.each do |prospect|
    json.set! prospect.id do
      json.extract! prospect, :id, :username, :email
    end
  end
end
