let times = 0;
let password = document.querySelector("#pass");
let named = document.querySelector("#name");
let btn = document.querySelector("#pasBtn");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
btn.addEventListener("click", disable);
function disable() {
  times++;
  if (password.value.toLowerCase() == "saba") {
    h2.innerText = "welcome";
    document.querySelector(".user_name").innerHTML = named.value;
    document.querySelector(".check").style.display = "none";
    document.querySelector(".check_after").style.display = "block";
  } else {
    h2.innerText = "wronge password";
    password.value = "";
    named.value = "";

    localStorage.setItem("times", times);
    checkItem();
  }
}

function checkItem() {
  if (localStorage.getItem("times")) {
    times = localStorage.getItem("times");
  }
  if (times == 3) {
    h2.innerText = "Wronge Wain Now wait for 30 sec";
    password.disabled = true;
    named.disabled = true;
    btn.disabled = true;
    let inter = setInterval(counter, 1000);

    let count = 0;
    if (localStorage.getItem("count")) {
      count = localStorage.getItem("count");
    }

    function counter() {
      count++;
      if (count <= 30) {
        h3.innerText = count;
        localStorage.setItem("count", count);
      } else {
        clearInterval(inter);
        h2.innerText = "Plz Type gain";
        h3.innerText = "";
        password.disabled = false;
        named.disabled = false;
        btn.disabled = false;
        times = 0;
        localStorage.setItem("count", 0);
        localStorage.setItem("times", 0);
      }
    }
  }
}

window.addEventListener("load", () => {
  checkItem();
});
