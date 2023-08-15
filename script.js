let swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // card
  function show(img) {
    let NewImg = document.getElementById("newImg");
    NewImg.src=img.src;

    document.querySelector(".Cards").style.display="flex"
    document.querySelector(".products").style.display="none"
    document.querySelector(".about").style.display="none"
    document.querySelector(".custamors").style.display="none"
    document.querySelector(".categories").style.display="none"
    document.querySelector("#home").style.display="none"
    document.querySelector("#connt").style.display="none"
    // document.querySelector("header").style.display="none"
  }

  function back() {
    // alert("Back")
    location.reload()
  }
     
 








//   <div class="heading">
//     <h1>Browse Our Hottest <br><span>Categories</span></h1>
//     <a href="#" class="btn">See All<i class="fa-solid fa-right-long"></i></a>
//   </div>
//   <div class="categorise-container">
//     <div class="box">
//       <img src="imgs/carrot-removebg-preview.png" alt="">
//     <h2>Fruits</h2>
//     <span>22 items</span>
//     <i class="fa-solid fa-right-long"></i>
//     </div>
//   </div>
//   <div class="categorise-container">
//     <div class="box">
//       <img src="imgs/furit_1-removebg-preview.png" style="width: 130%;" alt="">
//     <h2>Fruits</h2>
//     <span>22 items</span>
//     <i class="fa-solid fa-right-long"></i>
//     </div>
//   </div>
//   <div class="categorise-container">
//     <div class="box">
//       <img src="imgs/tototo-removebg-preview.png"  style="width: 70%; height: 150px;" alt="">
//     <h2>Fruits</h2>
//     <span>22 items</span>
//     <i class="fa-solid fa-right-long"></i>
//     </div>
//   </div>
//   <div class="categorise-container">
//     <div class="box">
//       <img src="imgs/nuts-removebg-preview.png" style="width: 120%;" alt="">
//     <h2>Fruits</h2>
//     <span>22 items</span>
//     <i class="fa-solid fa-right-long"></i>
//     </div>
//   </div>
//   <div class="categorise-container">
//     <div class="box">
//       <img src="imgs/peach-removebg-preview.png"   style="width: 120%;"alt="">
//     <h2>Fruits</h2>
//     <span>22 items</span>
//     <i class="fa-solid fa-right-long"></i>
//     </div>
//   </div>
//   <div class="categorise-container">
//     <div class="box">
//       <img src="imgs/peach-removebg-preview.png" alt="">
//     <h2>Fruits</h2>
//     <span>22 items</span>
//     <i class="fa-solid fa-right-long"></i>
//     </div>