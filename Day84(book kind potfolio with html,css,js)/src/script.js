const pageTurnBtn = document.querySelectorAll(".nextprev-btn");
console.log(pageTurnBtn);
pageTurnBtn.forEach((el, index) => {
  console.log("el", el);
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    console.log("pageTurnId", pageTurnId);
    const pageTurn = document.getElementById(pageTurnId);
    console.log("pageTurn", pageTurn);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});
