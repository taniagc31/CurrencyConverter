let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade');
const price = document.querySelector('#stock-price');

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    price.innerHTML = stockObject.p;
    //console.log(stockObject.p);
}