import React from "react";
interface TodoListprops{
items:{id:string,test:string} [];
};
const TodoList:React.FC<TodoListprops>=props=>{
    const todos=[{id:'t1',test:'Finish to course'}];
return  <ul>
    {props.items.map(todo=><li key={todo.id}>{todo.test}</li>)}
</ul>;
};
export default TodoList