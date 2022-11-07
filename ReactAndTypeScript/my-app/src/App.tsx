import React from 'react';
import TodoList from './components/TodoList';
function App() {
  const todos=[{id:'t1',test:'Finish to course'}];
  return (
    <div className="App">
      {/* A component that adds */}
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
