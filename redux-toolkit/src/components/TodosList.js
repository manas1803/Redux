import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos } from "../redux/todos/todosSlice";

const TodosList = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todos);
  const handleRemoveTodo = (todosId) => {
    dispatch(removeTodos(todosId));
  };

  return (
    <>
      {todoList.map((todos) => (
        <>
          <span>{todos.task}</span>
          <span onClick={() => handleRemoveTodo(todos.id)}>X</span>
          <br />
          <br />
        </>
      ))}
    </>
  );
};

export default TodosList;
