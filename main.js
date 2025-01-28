// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


let list = document.getElementById("list")



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




    
    