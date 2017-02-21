export const createBill = (bill) => (
  $.ajax({
    method: "POST",
    url: `api/bill`,
    data: {bill},
  })
);

export const fetchBills = () => (
  $.ajax({
    method: "GET",
    url: `api/bills/show`,
  })
);
