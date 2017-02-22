export const createBill = (bill) => (
  $.ajax({
    method: "POST",
    url: `api/bills`,
    data: {bill},
  })
);

export const fetchBills = () => (
  $.ajax({
    method: "GET",
    url: `api/bills/show`,
  })
);
