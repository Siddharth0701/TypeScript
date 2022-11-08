import React from "react";
interface TodoListprops{
items:{id:string,text:string} [];
onDeleteTodo:(id:string) =>void
};
const TodoList:React.FC<TodoListprops>=props=>{
    const todos=[{id:'t1',text:'Finish to course'}];
return  <ul>
    {props.items.map(todo=><li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={ props.onDeleteTodo.bind(null,todo.id)}  >Delete</button>
        </li>)}
</ul>;
};
export default TodoList