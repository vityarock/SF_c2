const progress1 = document.querySelector('.progress-bar1')
const progress2 = document.querySelector('.progress-bar2')
const progress3 = document.querySelector('.progress-bar3')
const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': POST, GET
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progress1.textContent = "Some error" : null;
}

ES.onmessage = message => {
    let answer = JSON.parse(message.data)
    let cats = answer["cats"];
    let dogs = answer["dogs"];
    let parrots = answer["parrots"]
    let total = cats + dogs + parrots 
    progress1.style.cssText = `width: ${(cats / total * 100).toFixed(1)}%;`
    progress1.textContent = `${(cats)}`
    progress2.style.cssText = `width: ${(dogs / total * 100).toFixed(1)}%;`
    progress2.textContent = `${(dogs)}`
    progress3.style.cssText = `width: ${(parrots / total * 100).toFixed(1)}%;`
    progress3.textContent = `${(parrots)}`
}
