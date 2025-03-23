// const getBtnTo=document.querySelector("#get-btn");
// const getBtn=document.querySelector("#get-btn2");


//  getBtnTo.addEventListener('click', function(e){

//  //   const s1coords = getBtn.getBoundingClientRect();
// //   window.scrollTo({
// //     left: s1coords.left + window.pageXOffset, 
// //     top: s1coords.top + window.pageYOffset,
// //     behavior: 'smooth'
// //  });
//       getBtn.scrollIntoView({behavior:'smooth'});
//  });

// const tabContainer=document.getElementsByClassName("tabs-cotainer").addEventListener('click', function(e){
//  const tab= e.target.closest('tabs-oper');
//  if(!tab)return;

//    tab.classList.add('tabs');
// });

var cav=document.    getElementById('mycanv');
var ctx=cav.getContext("2d");
ctx.fillStyle="#741475";
ctx.beginPath();
ctx.arc(250, 150, 100, Math.PI, 0, false);
ctx.fiil();
ctx.fillStyle="#FF0000";
ctx.fiilRect(150, 150, 200, 200);