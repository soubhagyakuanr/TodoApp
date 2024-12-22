let todoList=[];
function addTodo(){
  let inputelement=document.querySelector('#todo_input');
  let dateelement=document.querySelector('#todo_date');

  let todoitem=inputelement.value;
  let tododate=dateelement.value;
  console.log(todoitem);
  todoList.push({item:todoitem,duedate:tododate});
  inputelement.value='';
  dateelement.value='';
  displayitems();
}