import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
function App() {
  const todos=[{id:'t1',text:'Finish to course'}];
  const todoAddhandeler=(text:string)=>{
    console.log(text);
    
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
