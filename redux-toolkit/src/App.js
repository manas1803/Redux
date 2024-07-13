import React from "react";
import AddingTodo from "./components/AddingTodo";
import TodosList from "./components/TodosList";

function App() {
  
  return (
    <div className="App">
      <AddingTodo />
      <TodosList />
    </div>
  );
}

export default App;
