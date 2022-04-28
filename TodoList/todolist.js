let todoarray = [];
let ul = document.querySelector(".ul");

function addtodo() {
let a = document.querySelector("input")
let list = document.createElement("li")
list.className = "list";
let span = document.createElement("span");
span.className = "span";
let buttondiv = document.createElement("div");
buttondiv.className = "buttondiv";
let ebutton = document.createElement("button");
ebutton.className = "editbutton";

let dbutton = document.createElement("button");
dbutton.className = "deletebutton"
dbutton.addEventListener("click", (e)=> {
    e.preventDefault();
    ul.removeChild(e.path[2]);
    // console.log(e.path[2]);
})
span.innerHTML = a.value;
ebutton.innerHTML = "edit";
dbutton.innerHTML = "delete";
buttondiv.appendChild(dbutton);
buttondiv.appendChild(ebutton);
list.appendChild(span);
list.appendChild(buttondiv);

ul.appendChild(list);
a.value="";
}