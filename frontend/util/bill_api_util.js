export const createBill = (formData) => (
  $.ajax({
    method: "POST",
    url: `api/bills`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData,
  })
);

export const fetchBills = () => (
  $.ajax({
    method: "GET",
    url: `api/bills/show`,
  })
);
