// const mascot = document.querySelector(".mascot");
// const circleCon = document.querySelector(".circle-con");
// const door1 = document.querySelector(".door-1");
// const door2 = document.querySelector(".door-2");

// mascot.addEventListener("click", (e) => {
//   door1.classList.add("active");
//   door2.classList.add("active");
//   circleCon.classList.add("active");
//   e.target.classList.add("active");
// });

const contents = document.querySelectorAll(".content");

let scrollHeight = document.body.scrollHeight;

const resize = () => {
  scrollHeight = document.body.scrollHeight;
};

window.addEventListener("scroll", (e) => {
  console.log(Math.floor((scrollY / scrollHeight) * 100));
  switch (Math.floor((scrollY / scrollHeight) * 100)) {
    case 0 <= 20:
      console.log("0과 20사이");
      contents[0].classList.add("active");
      break;

    default:
      console.log("디폴트");
      break;
  }
});

window.addEventListener("resize", () => {
  console.log("resize", scrollHeight);
  resize();
});
