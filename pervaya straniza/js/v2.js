const form = document.getElementById("form");
function polucheniedannih(event) {
  event.preventDefault();
  const name = form.querySelector('[name="vvod_imeni"]');
  const familiya = form.querySelector('[name="vvod_familii"]');
  const otchestvo = form.querySelector('[ name="vvod_otchestwa"]');
  const values = {
    name: "asdad",
    surname: "asdasd",
    patronymic: "asdasd",
    department_id: 1,
  };

  const request = new Request("http://127.0.0.1:8000/api/teachers", {
    method: "POST",
  });
  request.body = JSON.stringify(values);
  request.headers.set(
    "Authorization",
    "Bearer " + "2|L4M08TofVC9uNxADIiVF8VSuSlmCF8PdBD8wZyIG"
  );
  fetch("http://127.0.0.1:8000/api/teachers/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "2|L4M08TofVC9uNxADIiVF8VSuSlmCF8PdBD8wZyIG",
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}
form.addEventListener("submit", polucheniedannih);
