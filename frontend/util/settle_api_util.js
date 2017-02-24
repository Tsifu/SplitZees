export const settleBill = (bill) => (
  $.ajax({
    method: "GET",
    url: 'api/owers',
    data: { bill }
  })
);


export const settleFriend = (friend) => (
  $.ajax({
    method: "POST",
    url: 'api/owers',
    data: { friend }
  })
);
