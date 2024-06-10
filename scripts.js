const button = document.querySelector("button");
const select_moeda = document.querySelector("#select-moeda");

const dolar = 5.2;
const euro = 5.9;
const bitcoin = 0.0000027

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
  } else if(select_moeda.value === "€ Euro") {
    valor_moeda.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    }).format(inputReais / euro);
  }
  else{
    select_moeda === "₿ Bitcoin"
    valor_moeda.innerHTML = "₿ " + (inputReais * bitcoin).toFixed(8);
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

  if(select_moeda.value === "₿ Bitcoin"){
    paragrafo_dinheiro.innerHTML = "Bitcoin"
    img_moeda.src = "./assests/bitcoin.png"
  }

  converte_moedas()
};


button.addEventListener("click", converte_moedas)
select_moeda.addEventListener("change", change_moedas);
