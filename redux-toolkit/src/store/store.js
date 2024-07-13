import {configureStore} from "@reduxjs/toolkit"
import todosReducer from "../redux/todos/todosSlice"

const store = configureStore({
    reducer:todosReducer
})

export default store;