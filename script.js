let list = document.querySelector(".list");
let clist = document.querySelector(".completed-list");
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.style.display = "block";
  let name = document.getElementById("name");
  let qty = document.getElementById("qty");
  let ele = `<div class='list-item'>  <input type="checkbox" onChange='completed(this)'/> <span>${name.value}</span>  <span>${qty.value}</span> </div>`;
  list.innerHTML += ele;
  name.value = "";
  qty.value = "";
});

const completed = (e) => {
  let parent = e.parentElement;
  clist.style.display = "block";
  if (e.checked) {
    e.classList.add("done");
    parent.classList.add("complete");
    clist.appendChild(parent);
  } else {
    e.classList.remove("done");
    parent.classList.remove("complete");
    list.appendChild(parent);
    if (clist.children.length == 1) clist.style.display = "none";
  }
};
