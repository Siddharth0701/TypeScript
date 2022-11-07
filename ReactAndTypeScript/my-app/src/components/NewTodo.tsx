import React, {useRef} from "react";
const NewTodo=()=>{
 const textInputRef= useRef<HTMLInputElement>(null);
   const todoSubmitHandeler =(event:React.FormEvent)=>{
    event.preventDefault();
    const enteredText=textInputRef.current!.value;
    console.log(enteredText);
    
   };
    return <form onSubmit={todoSubmitHandeler} >
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text"  id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">Add todo</button>
    </form>;

};
export default NewTodo;