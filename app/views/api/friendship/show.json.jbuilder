
json.friends @friends do |friend|
  json.id friend.id
  json.username friend.username
  json.email friend.email
end

json.prospectiveFriends @prospective_friends do |prospect|
  json.id prospect.id
  json.username prospect.username
  json.email prospect.email
end
