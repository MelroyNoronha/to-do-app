document.getElementById('myForm').addEventListener('submit',saveTask);

function saveTask(){
  var task = document.getElementById('inputBox').value;
  var allTasks = [];
  
  if(localStorage.getItem('allTasks') == null){
    allTasks.push(task);
    localStorage.setItem('allTasks' , JSON.stringify(allTasks));
  }else{
    allTasks = JSON.parse(localStorage.getItem('allTasks'));
    allTasks.push(task);
    localStorage.setItem('allTasks' , JSON.stringify(allTasks));
  }
  fetchTasks();
}

function fetchTasks(){
  var allTasks = JSON.parse(localStorage.getItem('allTasks'));
  var taskList = document.getElementById('taskList');

  taskList.innerHTML = "";
  for(var i=0; i < allTasks.length; i++){
    var task = allTasks[i];

    taskList.innerHTML += '<div class="collection-item">'+
                          '<br>'+
                          '<div class="col s6">'+
                          task +
                          '</div>'+
                          '<button class="btn col s3" onclick="strike(task)">Done</button>'+
                          '<button class="btn col s3 red" onclick="deleteTask(task)">Delete</button>'+
                          '</div>'+
                          '<br>'; 
  }

}

function deleteTask(){
  
}