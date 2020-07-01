 
 import React from 'react';
 import ReactDOM from 'react-dom';
 import './ToDoList.css';
 
 class ToDoItem extends React.Component{
 

 constructor(props) {
 	super(props);

 	this.state = {
 		value: this.props.ToDoItems.ToDoName,
 	}
 }

 

 render() {
 	return(
   <div className={!this.props.ToDoItems.done ? "Tasks" : "Tasks doneTasks"}>
    <div className="doneButton">
     {!this.props.ToDoItems.done ? 
     	<span onClick={this.props.doneTask} className="Good"></span> : 
     	<span onClick={this.props.doneTask} className="notGood"></span>}
    </div>
    {/*Элемент списка*/}
   	{this.props.ToDoItems.editing ?
   		<input 
   		 className="Input" 
   		 type="text" 
   		 defaultValue={this.state.value}
   		 autoFocus="true"
   		 onKeyPress={(event) => {
   		 	const key = event.which || event.keyCode;
   		 	if (key === 13) {
					 		this.setState({value: event.target.value});
					 		this.props.ToDoItems.editing = false;
   		 	}
   		}}/> :
   		<p onDoubleClick={this.props.editItem}>{this.state.value}</p>}

   	<span onClick={this.props.deleteTask} className="Delete"></span>
   </div>
  );
 }

 }

 export default ToDoItem