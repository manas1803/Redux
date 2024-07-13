import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos, updateTodos } from "../redux/todos/todosSlice";

const TodosList = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todos);
  const handleRemoveTodo = (todosId) => {
    dispatch(removeTodos(todosId));
  };

  const handleUpdate = (todos)=>{
    dispatch(updateTodos(todos))
  }

  return (
    <>
      {todoList.map((todos) => (
        <>
          <span>{todos.task}</span>
          <span onClick={() => handleRemoveTodo(todos.id)}>Remove</span>
          <span onClick={() => handleUpdate(todos)}>Edit</span>
          <br />
          <br />
        </>
      ))}
    </>
  );
};

export default TodosList;
