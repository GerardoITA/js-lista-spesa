let lista = ["Pasta", "Formaggio", "Carne", "Verdura"];
let div = document.getElementById("paint");


for (i = 0; i<lista.length; i++){
    div.append += `
        <ul>${lista[i]}</ul>
    `
}