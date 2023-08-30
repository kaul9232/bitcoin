const bitcoin = document.querySelector('button')
const gett = async () => {

    const res = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC');
    const res1 = await res.json();
    const bt = document.createElement('div');
    bt.innerText = res1.data.rates.USD;
    document.body.appendChild(bt);
}
bitcoin.addEventListener('click', gett())

