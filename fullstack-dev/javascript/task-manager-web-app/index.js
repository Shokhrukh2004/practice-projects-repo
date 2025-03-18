
// Creating the class Task
class Task{
    static count = 1;

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.completed = false;
        this.id = Task.count++;
    }
}

class TaskManager{
    static tasks = [];

    static taskAdd(task){
        this.tasks.push(task);
        TaskManager.taskDisplay();
    }

    static taskRemove(id){
        const index = TaskManager.tasks.findIndex(task => {
            return task.id == id;
        });

     
        TaskManager.tasks.splice(index, 1);
        TaskManager.taskDisplay();
        
    }

    static toggle(id){
        const index = TaskManager.tasks.findIndex(task =>{
            return task.id == id;
        });
       
        TaskManager.tasks[index].completed = !TaskManager.tasks[index].completed;
        TaskManager.taskDisplay();
    }

    static taskDisplay(){
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        TaskManager.tasks.forEach((task) => {
            const taskElement = `
            <div class="card-container">
                <div class="card__back card" id="description${task.id}">
                    <h3>Description</h3>
                    <p>${task.description}</p>
                    <button class="task--btn"><a href="#title">Go Back</a></button>
                    <button id="delete-btn" class="task--btn" onclick="TaskManager.taskRemove(${task.id})">Delete</button>
                </div>
                <div class="card__front card">
                    <h3>Title: ${task.title}</h3>
                    <h5>Condition: ${task.completed ? 'completed' : 'uncompleted'}</h5>
                    <button class="task--btn"><a href="#description${task.id}">Description</a></button>
                    <button class="task--btn" onclick="TaskManager.toggle(${task.id})">${task.completed ? 'uncomplete' : 'complete'}</button>
                </div>
            </div>
            `
            taskList.innerHTML += taskElement;
        });
    }
}


const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', () => {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const task = new Task(taskTitle, taskDescription);
    TaskManager.taskAdd(task);
});



