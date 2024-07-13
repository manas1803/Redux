import { createSlice, nanoid } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [{ id: 1, task: "Learn something new" }],
};

export const todosSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        task: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodos: (state, action) => {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    updateTodos: (state,action) =>{
      return {
        todos: state.todos.map((todo)=>{
          if(todo.id===action.payload.id){
            return {
              id:action.payload.id,
              task:action.payload.task
            }
          }
          else{
            return{
              ...todo
            } 
          }
        })
      }
    }
  },
});

export const { addTodos, removeTodos,updateTodos } = todosSlice.actions;
export default todosSlice.reducer;
