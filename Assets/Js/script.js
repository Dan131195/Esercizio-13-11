const frmlist = document.getElementById("list");
const text = document.getElementById("text");
const btnText = document.getElementById("btnText");
const taskList = document.getElementById("taskList");
const list = [];

btnText.addEventListener("click", function (e) {
  e.preventDefault();
  addArray();
  addList();
  frmlist.reset();
});

function addArray() {
  list.push(text.value);
}

function addList() {
  taskList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let newItem = document.createElement("li");
    newItem.innerText = list[i];
    newItem.addEventListener("click", function () {
      newItem.classList.toggle("bar");
    });
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", "btnDelete");
    button.setAttribute("onclick", `deleteItem(${i})`);
    button.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    newItem.appendChild(button);
    taskList.appendChild(newItem);
  }
}

function deleteItem(index) {
  list.splice(index, 1);
  addList();
}