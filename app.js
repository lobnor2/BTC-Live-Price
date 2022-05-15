let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let bitCoinPriceElement = document.getElementById('bitcoin-price');
let lastPrice = null;

ws.onmessage = (event) => {
    let bitcoinobject = JSON.parse(event.data);
    let price = `$${parseFloat(bitcoinobject.p).toFixed(2)}`;
    bitCoinPriceElement.innerText= price;


    bitCoinPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red' ;
    lastPrice = price;
}