const url = "https://apis.ccbp.in/jokes/random";
let responsePromise = fetch(url);

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); // Object { value: "They call it the PS4 because there are only 4 games worth playing!"
  })
  .catch((error) => {
    console.log(error);
  });