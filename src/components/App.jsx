import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
// import InputArea from "./InputArea";
function App() {
  const [inputText,setInputText]=useState("");
  const [items,addItems]=useState([]);

 function handleChange(event){
  const inputValue=event.target.value;
  setInputText(inputValue);
 }

 function handleClick(){
  addItems((prev)=>{
    return (
      [...prev, inputText]
    )
  })
 }
 function deleteItem(ind){
  addItems((prevItems)=>{
   return prevItems.filter((item,index)=>{
      return index!=ind;
  }
   ) 
})
 
 }
  return (

    <div className="container">
     <div className="heading">
      <h1>ToDo List</h1>
      </div>
      <div className="form">
      <input onChange={handleChange} type="text"></input>
      <button onClick={handleClick}>
      <span>Add</span>
      </button>
      </div>
      <div className="items">
      <ul onClick={deleteItem}>
      {items.map((nextitem,index)=>(
      <ToDoItem 
        key={index}
        id={index}
        text={nextitem}
        onChecked={deleteItem} />)
      )};
      </ul>
      </div>
    </div>
  );
}
export default App;
