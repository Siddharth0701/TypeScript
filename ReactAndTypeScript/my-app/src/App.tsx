import React,{useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {Todo} from  './todo.model'
function App() {
  // const todos=[{id:'t1',text:'Finish to course'}];
  const [todos,setTodo]= useState<Todo[]>([]);
  const todoAddhandeler=(text:string)=>{
  //  console.log(text);
  setTodo([{id:Math.random().toString(),text:text}]);
    
  };
  return (
    <div className="App">
      {/* A component that adds */}
      <NewTodo onAddTodo={todoAddhandeler}/>
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
