 
 import React from 'react';
 import './ToDoList.css';
 import ToDoItem from './ToDoItem.js';
 import ToDoItemForm from './ToDoItemForm.js';
 
 
 class ToDoListApp extends React.Component{
 
 constructor() {
  super();
  this.state = {
  	ToDoItems: [
    {id: 0, ToDoName: "Написать ToDoList!", done: true, editing: false},
    {id: 1, ToDoName: "Написать приложение с авиабилетами", done: true, editing: false},
    {id: 2, ToDoName: "Написать приложение с курсами валют", done: true, editing: false},
    {id: 3, ToDoName: "Разобраться с реактроутером", done: true, editing: false},
    {id: 4, ToDoName: "Собрать 3 приложения в одно", done: true, editing: false},
    {id: 5, ToDoName: "Создать страницу с портфолио", done: true, editing: false},
    {id: 6, ToDoName: "Начать искать работу", done: false, editing: false},
  	]
  }
 }

 addItem = (newItem) => {
  let { ToDoItems } = this.state;
  ToDoItems.push({
    id: ToDoItems ? ToDoItems.length : 0,
    ToDoName: newItem,
    done: false, 
    editing: false
  });
  this.setState({ToDoItems: ToDoItems});
 }

 doneTask = (id) => {
  const index = this.state.ToDoItems.map(ToDoItems => ToDoItems.id).indexOf(id);
  const ToDoList = this.state.ToDoItems;
  ToDoList[index].done === true ? (ToDoList[index].done = false) : (ToDoList[index].done = true);
  this.setState({ToDoItems: ToDoList});
 }

 deleteTask = id => {
  const index = this.state.ToDoItems.map(ToDoItems => ToDoItems.id).indexOf(id);
  let ToDoList = this.state.ToDoItems;
  ToDoList.splice(index, 1);
  this.setState({ToDoItems: ToDoList});
 }

 editItem = id => {
  const index = this.state.ToDoItems.map(ToDoItems => ToDoItems.id).indexOf(id);
  let ToDoList = this.state.ToDoItems;
  ToDoList[index].editing = true; 
  this.setState({ToDoItems: ToDoList});
 }
 
 

 render() {
 	const { ToDoItems } = this.state;
  const activeTasks = ToDoItems.filter(ToDoItems => !ToDoItems.done);
  const doneTasks = ToDoItems.filter(ToDoItems => ToDoItems.done);
  let oneOrMore = ToDoItems.length === 1 ? "активная задача" : "активных задач";
  return(
   <div className="ToDoList">
    <div className="Header">
     <h1>Это список задач</h1>
    </div>
    <div className="App">
     <div className="ActiveTasks">{activeTasks.length !== 0 ? <h2>У Вас <span className="tasksLength">{activeTasks.length}</span> {oneOrMore}:</h2> : <h2>У Вас нет задач!</h2>}</div>
     
       {[...activeTasks, ...doneTasks].map(ToDoItems => 
          <ToDoItem
           key={ToDoItems.id} 
           doneTask={() => this.doneTask(ToDoItems.id)}
           deleteTask={() => this.deleteTask(ToDoItems.id)}
           editItem={() => this.editItem(ToDoItems.id)}
           ToDoItems={ToDoItems}>
          </ToDoItem>
          )}
       <ToDoItemForm addItem={this.addItem}></ToDoItemForm>
     </div>
    <div className="myc">
      <button onClick={() => window.location.assign('/')} className="btn btn-primary myc">Назад</button>
    </div>
   </div>
   
  );
 }

 }

 export default ToDoListApp