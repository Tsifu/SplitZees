export const createfriendship = (friendship) => (
  $.ajax({
    method: "POST",
    url: `api/friendship`,
    data: {friendship},
  })
);

export const fetchFriendships = (id) => (
  $.ajax({
    method: "GET",
    url: `api/friendship/${id}`
  })
);
