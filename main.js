document.getElementById('myForm').addEventListener('submit',saveTask);

function saveTask(e){
  var task = document.getElementById('input-box').value;
  var allTasks = [];
  
  if(localStorage.getItem(allTasks) == null){
    allTasks.push(task);
    localStorage.setItem('allTasks' , JSON.stringify(allTasks));
  }else{
    allTasks = JSON.parse(localStorage.getItem(allTasks));
    allTasks.push(task);
    localStorage.setItem('allTasks' , JSON.stringify(allTasks));
  }

  e.preventDefault();
}

