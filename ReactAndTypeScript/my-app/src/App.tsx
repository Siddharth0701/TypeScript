import React,{useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {Todo} from  './todo.model'
function App() {
  // const todos=[{id:'t1',text:'Finish to course'}];
  const [todos,setTodo]= useState<Todo[]>([]);
  const todoAddhandeler=(text:string)=>{
  //  console.log(text);
  setTodo( prevTodos=>[...prevTodos,{id:Math.random().toString(),text:text}]);
    
  };
  const todoDeleteHandeler=(todoId:string)=>{
    setTodo(prevTodos=>{
      return prevTodos.filter(todo=>todo.id!==todoId);
    });
  };
  return (
    <div className="App">
      {/* A component that adds */}
      <NewTodo onAddTodo={todoAddhandeler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandeler}/>
    </div>
  );
}

export default App;
