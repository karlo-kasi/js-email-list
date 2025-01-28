// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


let list = document.getElementById("list")
let btn = document.getElementById ("btn")

function generaEmail (){
    for (i = 0; i < 10; i++) {

        fetch("https://flynn.boolean.careers/exercises/api/random/mail", { method: "GET" })
            .then(response => response.json())
            .then(data => {
                
                console.log(data.response)
                list.innerHTML +=
                `
                <li>
                ${data.response}                
                </li>
                `
            })
            .catch (error => {
                console.error(error)
            })  
    }
}

generaEmail ()

btn.addEventListener ('click', function (){
    list.innerHTML = ""
    generaEmail ()
})






    
    