var inputBox=document.getElementById("input-box");
var addBtn=document.getElementById("add-btn")
var taskListContainer=document.getElementById("task-list-cont");
var events;
var addTask=()=>{
  if(addBtn.innerHTML=="Edit"){
  events.target.previousElementSibling.innerHTML=inputBox.value;
  inputBox.value="";
  addBtn.innerHTML="Add"
  }
  else{
    var inputBoxText=inputBox.value.trim();
  if(!inputBoxText){
    alert("Enter the Task");
    return false;
  }
    var taskList=document.createElement("li");
    var taskContainer=document.createElement("p");
    var editButton=document.createElement("button")
    editButton.value="edit"
    editButton.id="edit";
    var deleteButton=document.createElement("button")
    deleteButton.value="delete"
    deleteButton.id="delete";
    taskListContainer.appendChild(taskList);
    taskList.appendChild(taskContainer);
    taskList.appendChild(editButton);
    taskList.appendChild(deleteButton);
    taskContainer.innerHTML=inputBoxText;
    editButton.innerHTML="Edit";
deleteButton.innerHTML="Delete";

      inputBox.value="";
  }
}

  var update=(e)=>{
  if(e.target.innerHTML=="Edit"){
  inputBox.value=e.target.previousElementSibling.innerHTML;
  addBtn.innerHTML="Edit";

   

  }
  else if(e.target.innerHTML==="Delete"){
     e.target.parentElement.remove();
     console.log(e.target.parentElement);
     
  }
   events=e;
}
  

addBtn.addEventListener('click',addTask);
taskListContainer.addEventListener('click',update)
