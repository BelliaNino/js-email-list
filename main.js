const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'



for (let i = 0; i < 10; i++){
fetch(endpoint)
.then(res => res.json())
.then(data => {
    console.log(data.response);
    
})
}