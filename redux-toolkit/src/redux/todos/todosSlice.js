import { createSlice, nanoid } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [{ id: 1, task: "Learn something new" }],
};

const todosSlice = createSlice({
  name: "todo",
  initialState:INITIAL_STATE,
  
});
