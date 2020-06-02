import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';


const intialList =["item 1","item 2","item 3"];
const List2 =["item 1","item 2","item 3"];

class toDoList extends React.Component{
   constructor(props){
     super(props);
     
     this.state={

       newTask:"",
       List:intialList
     } 
  //  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
   }
   
   getTask=(event)=>{
    
      this.setState({
        newTask: event.target.value
       });  
      
      
    }

    resetTask = ()=>{
      this.setState({ List:intialList });
    };

  
   addItem=()=>{
       //this.state.newTask    
       if(this.state.newTask!==""){
    this.setState({
      List:[...this.state.List,this.state.newTask],
      newTask:""
    });
  }
     
     
   }

    deleteItem(toDelete){
      const list = [...this.state.List];

      const updatedList = list.filter(
        (item) => item !== toDelete);

      this.setState({ List: updatedList });
    }

    functionA=()=>{
      const list1 = [...this.state.List];
      alert(list1[0]);
    }

  
   render(){


     return (

       <div className ="app" >

       <div className = "space">
      
       </div>
         <div className="title">
         <p>ToDoList App </p>
         </div>
         <div className = "section1">
         
         <br></br>
           
         <input 
         type = "text"
        value = {this.state.newTask}
        onChange = {this.getTask}
        placeholder= "enter task..."
           ></input>

         <button 
           type = "button"
           onClick={this.addItem}
           > Add Task</button>
          
           <button 
           type = "button"
           onClick={this.resetTask}
          
           > Reset Task</button>

           </div>

           <div className = "section2">
         <div>
             <ul>
                {this.state.List.map(i => <li key ={i}>
                  {i}
                  <button onClick={() => this.deleteItem(i)}>X</button>
                  </li>)}
             </ul>
         </div>
         </div>
         </div>

     );
   }


}
export default toDoList;


/*
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  //this is for the onChange (updates state) - everytime the user types something, the updateInput function will run
  //with two inputs (key and value which corresponds to newItem object and the string (which is event.target.value))
  //updateInput then updates the newItem state.
  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem
    };

    //copy current list of items
    const list = [...this.state.list];

    //add new item to the list
    list.push(newItem);

    //update state with new list and reset new item
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
  
    const list = [...this.state.list];

    //filter out deleted object
    //remember that the list (each object) gets assigned a value and id when its added to list
    const updatedList = list.filter(item => item.id !== id);

    //update state
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <div>Add an Item</div>
        <br />
        <input
          type="text"
          placeholder="type the item here"
          //once the input is entered, the object will be assigned a value = user's input
          //we also need this value later for the list also
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button onClick={() => this.addItem()}>Add</button>
        <br />
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;*/