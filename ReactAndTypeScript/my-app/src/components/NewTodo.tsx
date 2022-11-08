import { format } from "path";
import React, {useRef} from "react";
import './NewTodo.css';

type NewTodoProps={
    onAddTodo:(todoText:string)=>void;
};
const NewTodo:React.FC<NewTodoProps>=props=>{
 const textInputRef= useRef<HTMLInputElement>(null);
   const todoSubmitHandeler =(event:React.FormEvent)=>{
    event.preventDefault();
    const enteredText=textInputRef.current!.value;
    console.log(enteredText);
    props.onAddTodo(enteredText);
    
   };
    return <form onSubmit={todoSubmitHandeler} >
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text"  id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">Add todo</button>
    </form>;

};
export default NewTodo;