json.friends @friends do |friend|
  json.user_id friend.id
  json.username friend.username
end

json.prospectiveFriends @prospective_friends do |prospect|
  json.user_id prospect.id
  json.username prospect.username
end
