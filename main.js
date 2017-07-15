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

    taskList.innerHTML += '<br>'+
                          '<div class="col s10 white-text leftBorder" id="taskItem">'+
                          task +
                          '<button class="btn right hoverable teal darken-4" onclick="deleteTask(\''+task+'\')">Done</button>'+
                          '</div>'+
                          '<br>';
  }

}

function deleteTask(task){
  var allTasks = JSON.parse(localStorage.getItem('allTasks'));
  
  for(i = 0; i < allTasks.length; i++){
    if(task == allTasks[i]){
      allTasks.splice(i,1);
    }
  }
  
  localStorage.setItem('allTasks' , JSON.stringify(allTasks));

  fetchTasks();
}
