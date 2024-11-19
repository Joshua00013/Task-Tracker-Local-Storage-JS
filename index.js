
function submit(){
    const taskName = document.getElementById('taskInput_el').value;
    if(taskName !== ''){
        const newTask = {
        task: taskName,
        completed: false
    }
    localStorage.setItem(newTask.task,newTask.completed);
    renderTasks();
    }
    
}

function renderTasks(){
    const tasklist = document.getElementById("taskList_el");
    tasklist.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++){
        const line = document.createElement("hr")
        const taskName = document.createElement("p");
        const taskItem = document.createElement("li");
        const checkbox = document.createElement("input");
        const deleteButton = document.createElement("button");
        const deleteIcon = document.createElement("img")

        deleteIcon.src= "delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
        deleteButton.className = "deletebtn";
        taskItem.className = "taskitem";
        checkbox.type = "checkbox";
        checkbox.className = "taskcbox";
        

        const key = localStorage.key(i);
        let status = JSON.parse(localStorage.getItem(key));
        taskName.textContent = key;
        console.log(status);
        if(status !== false){
            checkbox.checked = true;
            // checkbox.className = "checked"
            taskName.className = "disabled"
            console.log("DISABLED!")
        }

        checkbox.addEventListener("change", ()=>{
            
            if(status===false){
                status = true;
            }
            else{
                status =false;
            }
            localStorage.setItem(key, JSON.stringify(status));
            renderTasks();
        })

        deleteButton.addEventListener("click",()=>{
            line.remove();
            taskItem.remove();
            localStorage.removeItem(key)
        })

        deleteButton.appendChild(deleteIcon);
        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskName);
        taskItem.appendChild(deleteButton);
        tasklist.appendChild(taskItem);
        tasklist.appendChild(line);
    }

}



renderTasks();
