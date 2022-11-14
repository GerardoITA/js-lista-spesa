let lista = ["Pasta", "Formaggio", "Carne", "Verdura"];
let div = document.getElementById("paint");


for (i = 0; i<lista.length; i++){

    div.innerHTML += `
        <li>${lista[i]}</li>
    `; 
}