// cria uma constante "url"
const url = "https://jsonplaceholder.typicode.com/users/1";

// cria e inicia uma async function
(async function () {
  try {
    // cria um json passando os headers
    const headers = {
      "Content-Type": "application/json",
    };

    // define o inicializador e passa os headers
    const init = {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        title: "Testando",
      }),
    };

    // define url, init e converte o response em array formato json
    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("DEU ERRO!");
  }
})();
