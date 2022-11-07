const request = new Request("http://127.0.0.1:8000/api/teachers", {
    method: "GET",
  });
  request.headers.set(
    "Authorization",
    "Bearer " + "2|L4M08TofVC9uNxADIiVF8VSuSlmCF8PdBD8wZyIG"
  );
  const url = "http://127.0.0.1:8000/api/teachers";
fetch(url)
  .then(
    response => response.text() // .json(), .blob(), etc.
  ).then(
    text => console.log(text) // Handle here
  );