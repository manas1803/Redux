import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/todos/todosSlice";

const AddingTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodos(task));
    setTask("");
  };

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <br />
      <br />
    </>
  );
};

export default AddingTodo;
