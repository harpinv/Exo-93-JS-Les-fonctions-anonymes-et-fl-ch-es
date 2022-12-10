let alerte = document.getElementById('alert');
let somme = document.getElementById('somme');

alerte.addEventListener('click', () => {
    alert("Hello Word!");
})

let body = document.querySelector('body');
somme.addEventListener('click', () => {
    let div = document.createElement('div')
    div.innerHTML = 5 + 6;
    div.style.fontSize = "20px";
    body.append(div);
})