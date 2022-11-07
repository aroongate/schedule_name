let mem = fetch("http://127.0.0.1:8000/api/admin/get_teachers", {
  method: "GET", // Здесь так же могут быть GET, PUT, DELETE
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + "7|EGbWQffACG3NRVkuIq8lDEiGltZqt4BTZwaJLyGt",
  },
})
  .then((response) => response.json())
  .then((data) => {
    let authors = data.results;
    let span ;
    span.innerHTMl = `$(authors.first_name) $(authors.last_name) $(authors.patronymic_name)`;
    console.log(span);
  });


