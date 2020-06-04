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


