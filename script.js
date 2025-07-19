//  Main purpose is to understand event handelling

let place = document.querySelector("#ul_1");
let input = document.querySelector("#input_1");

document.querySelector("#btn_1").onclick = function () {
  let new_task = document.createElement("li");
  let new_btn = document.createElement("button");

  new_btn.setAttribute("class", "Inner_btn");
  new_btn.innerText = "Remove";
  new_btn.style.marginLeft = "20px";
  new_btn.style.backgroundColor = "Black";
  new_btn.style.color = "white";

  new_task.innerText = input.value + " ";

  input.value = ""; // This will clear the text box

  new_task.appendChild(new_btn); // This will append button in new lsit
  place.append(new_task);

  new_btn.onclick = function () {
    // It will remove that task
    place.removeChild(new_task);
  };
};

// Hovering Event
document.querySelector(".btn").onmouseover = function (e) {
  e.target.style.backgroundColor = "grey";
};

document.querySelector(".btn").onmouseout = function (e) {
  e.target.style.backgroundColor = "black";
};

// Using EventListeners
let ulist = document.querySelector("#ul_1");

const make_gray = (e) => {
  // This is used bcs our buttons are created dynamically
  if (e.target.classList.contains("Inner_btn")) {
    e.target.style.backgroundColor = "grey";
  }
};
const make_black = (e) => {
  if (e.target.classList.contains("Inner_btn")) {
    e.target.style.backgroundColor = "black";
  }
};

ulist.addEventListener("mouseover", make_gray); // change bg color
ulist.addEventListener("mouseout", make_black);

// one click to dark mode again to light mode
let chnage_btn = document.querySelector("#btn_2");
chnage_btn.addEventListener("click", (e) => {
  if (e.target.innerText == "Night") {
    e.target.innerText = "Day";
    document.body.style.backgroundColor = "black";
  } else {
    e.target.innerText = "Night";
    document.body.style.backgroundColor = "darkslategrey";
  }
});
