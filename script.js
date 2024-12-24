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

function displayitems(){
  let containerElement=document.querySelector('.todo_container');
  //displayelement.innerText=" ";
  let newHtml='';
  for(let i=0;i<todoList.length;i++)
  {
    // displayelement.innerText=    displayelement.innerText+" \n"  +todoList[i];


    // let item=todoList[i].item;
    // let duedate=todoList[i].duedate;


    let {item,duedate}=todoList[i];
    newHtml+=`