const urlAvailableCurrencies = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'

function findCoins(from, to) {
    return fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`)
}

function CarregarMoedas() {
    const select = document.getElementById('select1')
    const select2 = document.getElementById('select2')
    fetch(urlAvailableCurrencies).then(response => response.json())
    .then(obj => {
        Object.keys(obj).forEach(key => {
            var option = document.createElement('option')
            var option2 = document.createElement('option')
            option.value = key;
            option.text = obj[key];
            option2.value = key;
            option2.text = obj[key];
            select.appendChild(option)
            select2.appendChild(option2)
        });

    })
}

function doSubmit() {
    const from = document.querySelector('.boxone')
    const to = document.querySelector('.boxtwo')
    const span = document.querySelector('#span')

    findCoins(from.value, to.value)
        .then(response => response.json())
        .then(obj => {
            if (obj != null) {
                span.innerHTML = obj[to.value];
            }else {
                span.innerHTML = 'Não obteve retorno';
            }
        })
        .catch(err => {
            span.innerHTML = `Oops! ${err}`;
        })
}