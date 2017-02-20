let bill = {
    amount: 15,
    description: "tea",
    bill_date: "Jan 31 2017",
    owers: [
      {
        amount: 5,
        user_id: 1,
        paid: false
      },
      {
        amount: 5,
        user_id: 3,
        paid: false
      }
    ]
};



$.ajax({
  method: "POST",
  url: "api/bills",
  data: { bill }
});
