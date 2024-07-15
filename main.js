const tasks = [['asdf','']];
const ldBar = document.querySelector(".bar-js");
const body = document.querySelector("body");
const addTaskBtn = document.querySelector(".add-task-btn");
const addATask = document.querySelector("#add-a-task")
const taskAdder = document.querySelector(".task-adder");


const taskList = document.querySelector(".task-list");
const ldModeSwitch = () => {
    ldBar.classList.toggle("dm-on");
    body.classList.toggle("dark-mode");
}

const adderSwitch = () => {
    taskAdder.classList.toggle("adder-display")
}

const displayTasks = () => {
    let str = '';
    for (let i = 0; i < tasks.length; i++) {
        str += `<div> Desc: ${tasks[i][0]}  Date: ${tasks[i][1]} <button class="del-task-btn ${i}">Del</button> </div>`;
    }
    taskList.innerHTML = str;

    const taskDelBtns = document.querySelectorAll(".del-task-btn");
    taskDelBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            tasks.splice(btn.classList[1],1);
            btn.parentNode.remove(btn.parentNode);
        });
    })
    console.log(tasks);
}


const addTask = () => {
    tasks.push([document.querySelector("#task-detail").value, document.querySelector("#task-date").value]);
    adderSwitch();
    displayTasks();
}

const delTask = () => {
    console.log(event.target);
    displayTasks();
}

displayTasks();

ldBar.addEventListener("click",ldModeSwitch);

addTaskBtn.addEventListener("click", adderSwitch);

addATask.addEventListener("click", addTask);