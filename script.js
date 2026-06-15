
function scrollToSection(id){
 document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

document.querySelectorAll('.card').forEach(card=>{
 card.addEventListener('mouseenter',()=>{
   card.style.boxShadow='0 10px 25px rgba(59,130,246,.4)';
 });
 card.addEventListener('mouseleave',()=>{
   card.style.boxShadow='none';
 });
});
