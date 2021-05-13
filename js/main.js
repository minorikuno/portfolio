let cercle = document.getElementsByClassName('cercle');
//  console.log(cercle[0]);

let myPhoto = document.getElementsByClassName('myPhoto');
// console.log(myPhoto[0]);

cercle[0].addEventListener('click', ()=>{
  myPhoto[0].style.backgroundImage ="url(images/minori_pic.jpg)";

})
cercle[0].addEventListener('dblclick', ()=>{
  myPhoto[0].style.backgroundImage ="url(images/main_photo.png)";

})

