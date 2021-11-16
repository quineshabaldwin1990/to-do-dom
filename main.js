window.onload = () => {
	let myUL = document.getElementById("myUL");
	let add = document.getElementById("add");

	let editItem = null;

	myUL.addEventListener("click", editDeleteTask);
};


// Add a checked symbol when clicking on a task to represnt task is completed
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);

// Create a new task when clicking on the "ADD" button
function addNewTask() {
	
	if (add.value != "ADD") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("myInput").value;

		add.value = "ADD";
		add.style="background-color:green"

		document.getElementById("myInput").value = "";
		return false;
	}

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
	return false;
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let editButton = document.createElement("button");

  editButton.className = "edit";

  editButton.appendChild(document.createTextNode("Edit"));
	  
  let deleteButton = document.createElement("button");

  deleteButton.className = "delete"
  deleteButton.appendChild(document.createTextNode("Delete"));
  
  li.appendChild(deleteButton);					

  li.appendChild(editButton);


}

//Removing all tasks
function removeAllTasks(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}

//Removing completed tasks
function removeCompletedTasks(){
    var completedTasks = document.getElementsByClassName("checked");
     while (completedTasks.length > 0) {
        completedTasks.item(0).remove();
    }
}

//Editing and deleting task
function editDeleteTask(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
			let li = e.target.parentNode;
			myUL.removeChild(li)
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("myInput").value =
			e.target.parentNode.childNodes[0].data;
		add.value = "EDIT";
		add.style="background-color:blue"
		editItem = e;
	}
}
