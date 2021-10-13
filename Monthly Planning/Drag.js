const todos = document.querySelectorAll(".to-do");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
    draggableTodo = this;
    console.log("dragStart");
}
function dragEnd() {
    draggableTodo = null; 
    console.log("dragEnd");

}

all_status.forEach((status) =>{
    status.addEventListener('dragover', dragOver);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
    status.addEventListener('drop', dragDrop);
});

function dragOver(e){
    e.preventDefault();
    // console.log("dragOver");
}

function dragEnter(){
    this.style.border = "1px dashed #ccc";
    console.log("dragEnter");
}


function dragLeave(){
    this.style.border = "none";
    console.log("dragLeave");
}

function dragDrop(){
    this.style.border = "none";
    this.appendChild(draggableTodo);
    console.log("dropped");
}

// Modal
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

// creating a todo function
const todo_submit = document.getElementById("submit");


todo_submit.addEventListener("click", createTodo);

function createTodo() {
    const todo_div = document.createElement("div");
    const input_value = document.getElementById("task").value;
    const text = document.createTextNode(input_value);

    todo_div.appendChild(text);
    todo_div.classList.add("to-do");
    todo_div.setAttribute("draggable", "true");

    // creating the span thing
    const span = document.createElement("span");
    const span_text = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_text);

    todo_div.appendChild(span);

    no_status.appendChild(todo_div);
    span.addEventListener("click", () => {
      span.parentElement.style.display = "none";
    });

    todo_form.classList.remove("active");
    todo_form.classList.remove("overlay");

    todo_div.addEventListener("dragstart", dragStart);
    todo_div.addEventListener("dragend", dragEnd);

    // console.log(todo_div);
}

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});