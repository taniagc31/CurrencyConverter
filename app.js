// Get Bitcoin current price
let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcbusd@trade");
const price = document.querySelector("#stock-price");

ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  price.innerHTML = stockObject.p;
};

// Currency conversion
let form = document.querySelector("#conversion");
let amount = document.querySelector("#amount");
let btc = document.querySelector("#btc");
let svc = document.querySelector("#svc");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (amount.value < 0.01) return;
  btc.value = (amount.value / price.innerHTML).toFixed(10);
  svc.value = (amount.value * 8.79).toFixed(2);
});
