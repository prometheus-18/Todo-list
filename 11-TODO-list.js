const todolist =[{
 name : 'dinner', 
 dueDate :'2024-11-18' 
}
 , {
  name :'wash',
  dueDate : '2024-11-18'
 
}];

renderTodolist();

function renderTodolist() {



 let todolistHTML =[];
  for(let i =0;i<todolist.length;i++){
    const todoObject = todolist[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;

    const html = `
   <div>${name} </div>
   <div> ${dueDate}</div>
     <button onclick="
     todolist.splice(${i},1);
     renderTodolist();
     ">Delete</button>
     </p>`;
    todolistHTML +=html;
  }

  document.querySelector('.js-todo-list')
  .innerHTML =todolistHTML;
}

function addTodo(){
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const date = document.querySelector('.js-due-date-input');  
 const dueDate = date.value ;
 
 todolist.push({ 
 name , dueDate});

 inputElement.value ='';

 renderTodolist();
}