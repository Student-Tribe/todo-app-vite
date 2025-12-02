import { Client,TablesDB,ID } from "appwrite";
// Initializing the Appwrite client
const client = new Client()
    .setProject("692d26b1000cd72f02d7")
    .setEndpoint('https://sgp.cloud.appwrite.io/v1');

const db= new TablesDB(client);

//storing database and table id in variables
const databaseId='692d3ea2002df67af4f5'
const tableId='tasks'

//getting references to html elements
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

//adding event listener to the form
todoForm.addEventListener('submit',addTask);

//function to get all tasks from the database
async function getTasks() {
    const response =await db.listRows(
        databaseId,
        tableId
    )
    console.log(response);
    for(let i=0; i<response.rows.length;i++){
        renderTodos(response.rows[i])
    }
}

getTasks();

//function to render tasks on the webpage
async function renderTodos(task){
    const output=`<div class="taskwrapper" id="task-${task.$id}">
        <p class="complete-${task.isTaskDone}">${task.taskText}</p>
        <strong class="delete" id="delete-${task.$id}">x</strong>
    </div>`
    todoList.insertAdjacentHTML('afterbegin' ,output)
    const update=document.getElementById(`task-${task.$id}`);
    const deleteBtn=document.getElementById(`delete-${task.$id}`);
    //adding event listener to delete button
    deleteBtn.addEventListener('click',()=>{
        db.deleteRow(
            databaseId,
            tableId,
            task.$id
        )
        update.remove();
    })
    //adding event listener to task to mark it complete/incomplete
    update.childNodes[1].addEventListener('click',async (event)=>{
        task.isTaskDone= !task.isTaskDone;

        event.target.className=`complete-${task.isTaskDone}`
        db.updateRow(
            databaseId,
            tableId,
            task.$id,
            {
                'isTaskDone':task.isTaskDone
            }
        )
    })
}
//function to add a new task
async function addTask(e) {
    e.preventDefault();

    const input=todoInput.value.trim();

    if(input==''){
        alert("Enter the task!!!!")
        return
    }

 const response=await db.createRow(
        databaseId,
        tableId,
        ID.unique(),
        {
            'taskText':input,
            'isTaskDone':false
        }
    )

    renderTodos(response);
    todoForm.reset();
}
