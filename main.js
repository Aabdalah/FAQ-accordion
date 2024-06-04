let questions = document.querySelectorAll(".icon");

questions.forEach((el) => {
  el.addEventListener("click", function () {
    questions.forEach((e) => {
      e.childNodes[1].childNodes[3].src = "assets/images/icon-plus.svg";
      e.childNodes[3].style.height = "0px";
      e.childNodes[1].style.marginBottom = "0px";
    });
    if (
        getComputedStyle(el.childNodes[3]).height == "92px"
    ) {
        el.childNodes[3].style.height = "0px";
        el.childNodes[1].childNodes[3].src = "assets/images/icon-plus.svg";
        el.childNodes[1].style.marginBottom = "0px";
    } else {
        el.childNodes[3].style.height = "92px";
        el.childNodes[1].childNodes[3].src = "assets/images/icon-minus.svg";
        el.childNodes[1].style.marginBottom = "15px";
    }
  });
});

questions.forEach((el) => {
    el.addEventListener("focus", function () {
      questions.forEach((e) => {
        e.childNodes[1].childNodes[3].src = "assets/images/icon-plus.svg";
        e.childNodes[3].style.height = "0px";
        e.childNodes[1].style.marginBottom = "0px";
      });
      if (
          getComputedStyle(el.childNodes[3]).height == "92px"
      ) {
          el.childNodes[3].style.height = "0px";
          el.childNodes[1].childNodes[3].src = "assets/images/icon-plus.svg";
          el.childNodes[1].style.marginBottom = "0px";
      } else {
          el.childNodes[3].style.height = "92px";
          el.childNodes[1].childNodes[3].src = "assets/images/icon-minus.svg";
          el.childNodes[1].style.marginBottom = "15px";
      }
    });
  });


// icons.forEach((el)=>{
//     el.addEventListener("click",function(){
//         if(el.src == "http://127.0.0.1:5500/assets/images/icon-plus.svg"){
//             el.parentElement.nextElementSibling.style.height = "89.6px"
//             el.src = "assets/images/icon-minus.svg"
//             el.parentElement.style.marginBottom = "20px"
//         }else{
//             el.parentElement.nextElementSibling.style.height = "0"
//             el.src = "assets/images/icon-plus.svg"
//             el.parentElement.style.marginBottom = "0"
//         }
//         if(el.nextElementSibling.src == "http://127.0.0.1:5500/assets/images/icon-plus.svg"){
//             el.parentElement.nextElementSibling.style.height = "89.6px"
//             el.nextElementSibling.src = "assets/images/icon-minus.svg"
//             el.parentElement.style.marginBottom = "20px"
//         }else{
//             el.parentElement.nextElementSibling.style.height = "0"
//             el.nextElementSibling.src = "assets/images/icon-plus.svg"
//             el.parentElement.style.marginBottom = "0"
//         }
//     })
// })