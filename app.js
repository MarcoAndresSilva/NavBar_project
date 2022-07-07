// classList - shows/gets all classes in the
//  contains - checks classList for specific class names
// add - add - class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function (){

  // if(links.classList.contains('show-links')){
  //   links.classList.remove('show-links');
  // }else{
  //   links.classList.add('show-links');
  // }    lo mismo en una sola linea de codigo
  links.classList.toggle('show-links');

})
