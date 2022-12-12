let input = document.getElementById("input");
let click = document.getElementById("click");
let task = document.getElementById("task");
let todo = document.getElementById("todoList");
let select = document.getElementById("select");
let option = document.getElementById("option");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
var audio = document.getElementById("audio");
var audio2 = document.getElementById("audio2");

function display() {
  //Create the list items or elements that we want
  var listItem = document.createElement("li");
  var newCheckbox = document.createElement("input");
  var newButton = document.createElement("button");

  // Set the new element's content
  listItem.innerHTML = input.value;
  newCheckbox.type = "checkbox";
  newButton.innerHTML = "X";

  // Set any other desired attributes, such as class name or styles
  listItem.id = "list-element";

  newButton.className = "new-button";

  newCheckbox.className = "new-checkbox";

  // Append the element into the HTML todo div
  todoList.appendChild(listItem);
  listItem.appendChild(newCheckbox);
  listItem.appendChild(newButton);

  newButton.addEventListener("click", function () {
    listItem.remove();
  });

  newCheckbox.addEventListener("click", function () {
    if (listItem.style.textDecoration === "line-through") {
      audio.play();
      listItem.style.textDecoration = "none";
      listItem.style.opacity = "1";
    } else {
      audio2.play();
      listItem.style.textDecoration = "line-through";
      listItem.style.opacity = "0.3";
    }
  });

  if (input.value === "") {
    listItem.remove();
    alert("Please write a task");
  }

  input.value = "";

  select.addEventListener("change", function (e) {
    if (e.target.value === "Completed") {
      if (listItem.style.textDecoration !== "line-through") {
        listItem.style.display = "none";
      } else {
        listItem.style.display = "block";
      }
    } else if (e.target.value === "Incomplete") {
      if (listItem.style.textDecoration === "line-through") {
        listItem.style.display = "none";
      } else {
        listItem.style.display = "block";
      }
    } else {
      listItem.style.display = "block";
    }
  });

  if (option === "Completed") {
    document.body.style.backgroundColor = "red";
  }
}

input.addEventListener("keyup", (event) => {
  // check if the 'enter' key was pressed
  if (event.key === "Enter") {
    // set the value of the input to an empty string
    display();
    navigator.vibrate(200);
    input.setAttribute("placeholder", "Write a task for today");
  }
});

input.addEventListener("click", function () {
  // Change the placeholder attribute when the input is clicked on
  this.setAttribute("placeholder", "");
});

document.addEventListener("click", function (event) {
  // If the target of the click event is not the input field, update the placeholder attribute
  if (event.target !== input) {
    input.setAttribute("placeholder", "Write a task for today");
  }
});
