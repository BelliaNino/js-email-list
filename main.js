//variabile per l'API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const listEl = document.getElementById('listMail')
const btnEl = document.getElementById('restart')



//aggiungo un .addEventListener per rigenerare 10 nuove email 
btnEl.addEventListener('click', function (e) {
    e.preventDefault
    listEl.innerHTML = " "

/*tramite "fetch" vado a rihiamare l'API e in seguito vado ad iterare 10 volte grazie al ciclo for()
per farm restituire,in questo caso, 10 email random*/

    for (let i = 0; i < 10; i++) {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log(data.response);

                listEl.innerHTML += `<li class="list-group-item list-group-item-action">${data.response}</li>`
            })
    }
})


