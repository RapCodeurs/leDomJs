/*const button = document.getElementById('button');

button.addEventListener('click', () => {
    //window.alert('Welcome to my site')
    let fenetre = window.open("destination.html", 'destination','width=500, height=500')

    fenetre.addEventListener('load', () => {
        let buttun2 = fenetre.document.getElementById('button2');
        buttun2.addEventListener('click', () => {
            fenetre.close()
        });
    });
  
});*/

window.addEventListener('load', () => {
    window.alert('Bonjour, bienvenu sur mon site')
    let user = window.prompt("Quel est votre nom ?")
    window.alert(`Bienvenu ${user}`)
});


let button = document.createElement('button');
button.innerHTML = "button";
document.body.appendChild(button);

let close = document.createElement('button');
button.innerHTML = "close";
document.body.appendChild(close);

/*button.addEventListener('click', () => {
    window.open("https://www.google.com", 'google', 'width=400, height=300' )

});

button.addEventListener('click', () => {
    window.close()
})

let open = document.createElement('button');
open.innerHTML = "open";
document.body.appendChild(open);
let url = window.prompt("Veuillez entrer une URL")


open.addEventListener('click', () => {
   // let url = window.prompt("Veuillez entrer une URL")
    window.open(url)
})*/

console.log(window.screen.width);


let open = document.createElement('button');
open.innerHTML = "open";
document.body.appendChild(open);

open.addEventListener('click', () => {
    //window.location.assign("https://www.google.com/", 'google', 'width=400, height=300')
    window.location.replace("https://www.google.com/", 'google', 'width=500, height=500')
});


let date = new Date();
date.setHours(date.getHours() + 1);

document.cookie = "username=user1; expires=" + date.toUTCString();

let valeurDucokie;

let tableau = document.cookie.split("; ")

valeurDucokie = tableau[1]

console.log(valeurDucokie)

