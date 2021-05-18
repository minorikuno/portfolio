// Button au milieu change la photo
let cercle = document.getElementsByClassName('cercle');
//  console.log(cercle[0]);

let myPhoto = document.getElementsByClassName('myPhoto');
// console.log(myPhoto[0]);

cercle[0].addEventListener('click', () => {
  myPhoto[0].style.backgroundImage = "url(images/minori_pic.jpg)";

})
cercle[0].addEventListener('dblclick', () => {
  myPhoto[0].style.backgroundImage = "url(images/main_photo.png)";

})

// Affiché le heading corrésponds aux buttons
let heading = document.getElementById('heading');
let me = document.getElementById('me');
let parcours = document.getElementById('parcours');
let cv = document.getElementById('cv');
let linkedin = document.getElementById('linkedin');

// Object message : btn name
let messageH = {
  "Me découvrir": me,
  "Mon parcours": parcours,
  "Mon CV": cv,
  "Mon compte Linkedin": linkedin
}

// display object array in JS with Object.keys()
Object.keys(messageH).forEach(messeage => {
  // default message
  messageH[messeage].addEventListener('mouseleave', () => {
    heading.innerText = "Cliquer les touches :";
  });
  // Message correnponds to btn
  messageH[messeage].addEventListener('mouseover', () => {
    heading.innerText = messeage;
  });

})





