export const createfriendship = (friendship) => (
  $.ajax({
    method: "POST",
    url: `api/friendships`,
    data: {friendship},
  })
);

export const fetchFriendships = (id) => (
  $.ajax({
    method: "GET",
    url: `api/friendships/${id}`
  })
);
