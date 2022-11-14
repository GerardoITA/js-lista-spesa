let lista = ["Pasta", "Formaggio", "Carne", "Verdura"];
let div = document.getElementById("paint");


/*for (i = 0; i<lista.length; i++){

    div.innerHTML += `
        <li>${lista[i]}</li>
    `; 
}*/

let i = 0;

 while (i < lista.length){
    
    div.innerHTML += `
        <li>${lista[i]}</li>
    `; 

    i++;
} 
