const button = document.querySelector("button");
const select_moeda = document.querySelector("#select-moeda");

const dolar = 5.2;
const euro = 5.9;

const converte_moedas = function () {
  const inputReais = document.querySelector("input").value;
  const realValor = document.querySelector("#real-valor");
  const valor_moeda = document.querySelector("#valor-moeda");
  realValor.innerHTML = inputReais;

  realValor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select_moeda.value === "US$ Dólar americano") {
    valor_moeda.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  } else {
    select_moeda.value === "€ Euro";
    valor_moeda.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }
};

const change_moedas = function () {
  const paragrafo_dinheiro = document.querySelector("#paragrafo-dinheiro");
  const img_moeda = document.querySelector("#img-moeda");

  if (select_moeda.value === "US$ Dólar americano") {
    paragrafo_dinheiro.innerHTML = "Dólar americano";
    img_moeda.src = "./assests/eua.png";
  } else {
    select_moeda.value === "€ Euro";
    paragrafo_dinheiro.innerHTML = "Euro";
    img_moeda.src = "./assests/euro.png";
  }

  converte_moedas()
};


button.addEventListener("click", converte_moedas)
select_moeda.addEventListener("change", change_moedas);
