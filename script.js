const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes();

function checkboxes(){
    const triggerButton = window.innerHeight / 5 * 4;
  

 boxes.forEach(box => {
     const boxtop = box.getBoundingClientRect().top;
     if (boxtop < triggerButton){
        box.classList.add('show');
     }
     else{
        box.classList.remove('show');
     }
 });

}