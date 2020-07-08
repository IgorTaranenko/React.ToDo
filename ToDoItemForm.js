 import React from 'react';
 import './ToDoList.css';
 
 class ToDoItemForm extends React.Component{
 
 constructor(props) {
 	super(props);
 	this.state = {
 		value: "",
 	}
 }
 
 InputChange = event => {
 	this.setState({ value: event.target.value });
 }
 
 addItem = () => {
 	const { value } = this.state;
 	if (value) {
 	 this.props.addItem(value);
 	 this.setState({value: ""});	
 	} else{
 		alert("Введите задачу");
 	} 	
 }

 EnterPress = event => {
  if (event.key === "Enter") this.addItem();
 }
 
 render() {
  const { value } = this.state;
  return(
   <div className="ToDoItemForm">
   	<input
   	 value={value}
   	 placeholder="Введите задачу"
   	 onChange={this.InputChange}
   	 onKeyPress={this.EnterPress}
   	 className="Input"
   	 type="text"/>
   	<button onClick={this.addItem} className="addButton">ADD</button>
   </div>
  );
 }

 }

 export default ToDoItemForm