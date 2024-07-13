# Redux
Redux is a state management library, widely used mostly by React. The traditional Redux i.e. Classical Redux and today we have a new way of using the same redux as redux-toolkit. So lets begin.

## Classic Redux

The basic idea about the statemanagement with redux is we have a single store that will hold the state of all of the project at a given point of time. So now lets see how all this is created and done.
> In classic redux the main issue was of the boilerplate code needed, and you would see that just in a bit

Before diving into the code and logic stuff lets clear out certain key definitions first
#### Reducer 
Reducer is basically a function that gets triggered and update the state based on the action that has happened

#### Action
Action are basically the `action` that will be performed which in turn will update the state

#### Root Reducer
Its the main reducer to which all the other reducers are combined that will be in the project

#### Store
Its the container that stores the states from where you can simply read state value or update it. Store is passed to whole project as `Provider`.

#### ActionTypes
These are simply the `types` of actions that a particular reducer can have.

### Steps to Proceed

#### I. Initial Setup
First we will begin with installing a few libraries to our project.
1. Redux
2. React-Redux
3. Redux-Logger

#### II. Creating store 
We will begin by creating a generic file `store.js` that will be our store for the whole project. To create a store we have `createStore` method from redux. In createStore we have tp pass 3 parameters.
1. The rootReducer
2. PreLoaded State(we can keep this undefined as well)
3. Logger
>The createStore method is deprecetated one and the newer method is configureStore.

**store.js**
```js
import {createStore} from "redux"

// We will pass the parameters later to create store
const store = createStore()

export default store;

```
#### III. Creating rootReducer

We can create a folder as redux and add a `rootReducer.js` file. This rootReducer will take all the other reducers that we will create in our project. To combine the reducers we have a very simple method from redux `combineReducers`. Then we can also update the `store.js` with this rootReducer

**rootReducer,js**

```js
import {combineReducer} from "redux"

// we will add our reducer here
const rootReducer = combineReducer({})

export default rootReducer
```

**store.js**
```js
import {createStore} from "redux"
import rootReducer from "redux/rootReducer"

const store = createStore(rootReducer,undefined)

export default store;

```

#### IV. Creating the Actions and Action Types
Now we have to create actions that we will trigger(dispatch) and update our state in the store. Now we need to create actions again and again so to avoid duplicate code we can simply create a genric file that will take in `data` and `type` and return to us the action. <br>Also we need to create `ActionTypes` as well. Actually they are not necessary since they are just constants but in bigger picture if we have multiple actions we might miss the spelling since this is something for our conveneince so its better to create them as `const`
<br> Lets create the files. 

**common/actionCreator.js**
```js
export const actionCreator = (type,payload)=>{
    return {
        type,
        payload
    }
}
```

**redux/bankPaymentRedux/bankPaymentActionTypes.js**
```js
export const BANK_PAYMENT_TYPES = {
  ADD_AMOUNT = "ADD_AMOUNT",
  WITHDRAW_AMOUNT = "WITHDRAW_AMOUNT"
}

```
**redux/bankPaymentRedux/bankPaymentAction.js**

```js
import {actionCreator} from "common/actionCreator"
import {BANK_PAYMENT_TYPES} from "./bankPaymentActionTypes"

export const addAmount = (amount)=>actionCreator(BANK_PAYMENT_TYPES.ADD_AMOUNT,amount)
export const withDrawAmount = (amount)=>actionCreator(BANK_PAYMENT_TYPES.WITHDRAW_AMOUNT,amount)
```

#### V. Creating our Reducer
Now the next step is to create individual reducers. As mentioned earlier reducers are just functions that perform certain actions and change the state of the project. Here we will create a `bankReducer` and we will add actions as `withdrawl` and `adding` amount. <br>
Inside our redux folder we will create a new folder as `bankRedux` and then inside the folder a file as `bankReducer.js`<br>
In the reducer we first initialse the initial state for that particular reducer and then we pass `2` things to the reducer funstion
1. The State(By default Initial State)
2. The Action

The action that we pass is basically the action that we will trigger and on trigger of which what this reducer will do. Action also has 2 things
1. Type :- Its generally a string that tells us what type of action is being performed. We have already created the action types so we will write for each type what needs to be done
2. Payload :- The data that we will use to update the state.

At last we will update the rootReducer as well.

**bankReducer.js**

```js

const INITIAL_STATE = {
    amount = 0
}

export const bankReducer = (state=INITIAL_STATE,action)=>{
    const {type,payload}=action
    switch(type){
        case ADD_AMOUNT : 
        return {
            amount = state.amount+payload
        }

        case WITHDRAW_AMOUNT : 
        return {
            amount = state.amount-payload
        }

        default:
            return state
    }
}
```

**rootReducer,js**

```js
import {combineReducer} from "redux"
import {bankPaymentReducer} from "redux/bankPaymentReducer

const rootReducer = combineReducer({
    bankPayment:bankPaymentReducer
})

export default rootReducer
```

#### VI. Adding the logger
In order to add a middleware in our statemanagement, the code needs to be added in store as the thrid parameter for createStore. We can similarly add logger(in fututre it can be used for understanding redux saga and redux thunk)

**store.js**
```js
import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './redux/rootReducer'

const middlewares = [logger] 
const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composedEnhancers)

```

#### VII. Dispatching the actions
So now comes the work of `react-redux` to communicate between react and redux. Now we want to trigger the actions that we have created. SO we basically call it as `dispatching` the actions. To dispatch an action we use `useDispatch` of react-redux and trigger the action

**App.js**
```js
import {useDispatch} from "react-redux"
import {addAmount} from "redux/bankPaymentTypeActions"


const dispatch = useDispatch()

const handleAddAmount = (amount)=>{
    dispatch(addAmount(amount))
}
```

> As you can see there is a lot of code just for the setup of a very basic state management. This is the main reason of shifting to a better and more precise version of redux which removes the evident boilerplate code

## Redux Thunk
Redux-Thunk is a middleware for Redux that allows you to write action creators that return a `function` instead of an `action object`. This function receives the store's `dispatch` method and `getState` function as arguments, allowing it to dispatch multiple actions, perform `asynchronous operations`, and access the current state if needed before dispatching an action.

### What is middleWare?
So basically they are the part of the code which helps to interact with actions dispatched to the Redux store before they reach the reducer. These sit between the action dispatch and reducer.

> The primary purpose of redux-thunk is to handle asynchronous operations.

### Steps to Proceed

With redux thunk the main part is that it is added as a middleware to handle the `async` calls between the reducer and the store. So we add thunk as a middleware. Also `thunk` is a special type of function and with respect to redux `thunk` is basically a function that returns `dispatch` and `state`

#### I. Creating the store
Similar to how we proceeded with classic redux we will be creating a new file in src as `store.js`

**store.js**

```js
import { createStore,applyMiddlewares } from "redux"
import {thunk } from "redux-thunk";

const thunk = applyMiddlewares(thunk)
const store = createStore()


export default store;
```

#### II. Creating the rootReducer

Now again we will be creating a root reducer since we want to pass that to our store

**rootReducer**
```js
const rootReducer = combineReducers({})
export default rootReducer;
```
**store.js**

```js
import { createStore,applyMiddlewares } from "redux"
import {thunk } from "redux-thunk";
import rootReducer from "redux/rootReducer"

const thunk = applyMiddlewares(thunk)
const store = createStore(rootReducer,thunk)


export default store;
```

#### III. Creating the Actions and Action Types
Here we will again create the action files and action types but now the action function will be a thunk.
<br> Lets create the files. 

**common/actionCreator.js**
```js
export const actionCreatorWithPayload = (type,payload)=>{
    return {
        type,
        payload
    }
}

export const actionCreatorWithoutPayload = (type)=>{
    return{
        type
    }
}


```

**redux/userRedux/userActionTypes.js**
```js
export const USER_DATA = {
  FETCH_REQUEST = "user/request",
  FETCH_SUCCESS = "user/success"
  FETCH_FAILURE = "user/failed"
}

```
**redux/userRedux/userAction.js**

```js
import {actionCreatorWithPayload,actionCreatorWithoutPayload} from "common/actionCreator"
import {USER_DATA} from "./bankPaymentActionTypes"

const fetchRquest = ()=>actionCreatorWithoutPayload(USER_DATA.FETCH_REQUEST)
const fetchSuccess = (data)=>actionCreatorWithPayload(USER_DATA.FETCH_SUCCESS,data)
const fetchFailure = (error)=>actionCreatorWithPayload(USER_DATA.FETCH_FAILURE,error)


export const fetchData = ()=>{
    return async (dispatch,getState)=>{
        dispatch(fetchRequest())
        try{
            const data = axios.get("API here").then((res)=>dispatch(fetchSuccess(res.data)))
        }
        catch(error){
            dispatch(fetchFailure(error))
        }
    }
}
```

#### IV. Creating our reducer

This is exactly like the classic redux. We need to create an initial state and our reducer function

**userRedux/userReducer.js**
```js
const INITIAL_STATE = {
    isLoading:false,
    user:[],
    error:null
}

export const userReducer = (state=INITIAL_STATE,action)=>{
    const {type,payload} = action
    switch(type){
        case USER_DATA.FETCH_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case USER_DATA.FETCH_SUCCESS:
            return{
                ...state,
                user:payload,
                isLoading:false
            }
        case USER_DATA.FETCH_FAILURE:
            return{
                ...state,
                error:payload
            }
        default:
            return state
    }
}
```

#### V. Dispatching the action
Since we are making an API call we dispatch the action using the `useEffect` hook. Dispatching is similar to the classic redux

**App.js**

```js
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {fetchData} from "redux/userAction"

const dispatch = useDispatch()
useEffect(()=>{
    dispatch(fetchData())    
},[])

```
## Redux Toolkit
The new and the latest version that is used with redux is redux toolkit. The idea behind the use of the redux toolkit is to avoid unnecessary boilerplate code which we saw in case of classic redux and redux thunk

### Steps to proceed

#### I. Create a new store
Just like in classic redux we have to create a new store. In this scenario what we do is we create a new file as store and use `configurestore` method

**store.js**
```js
import {configureStore} from "redux"

const store = configureStore({})

export default store
```

#### II. Creating a slice
In the new redux toolkit the idea of creating actions and reducers separately was removed since it cause a lot of boilerplate code. So the idea was to create an entirely different method called as `slice`
<br>
A slice contains `reducers` and `actions` together. We don't need to explicitly define the type of action for slice.<br> 
Syntax wise we start as usual by creating an initial state for the slice, then we use the method `createSlice` which help us in creating a slice<br>
`createSlice` takes 3 arguments :- 
1. name :- name that will be assigned to the slice
2. InitialState :- initialState of the slice
3. reducers :- An object that contains different `methods` of reducers to be used

At last we export all of the reducers as default and to use the individual reducer we export them as individual `action` of the slice

**todosSlice.js**

```js
import {createSlice,nanoid} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    todos = [{id:"1",task:"Clean Clothes"}]
}

const todosSlice = createSlice({
    name:"todos",
    initialState:INITIAL_STATE,
    reducers : {
        addTodos:(state,action)=>{
            const task = {
                id: nanoid(),
                task:action.payload
            }
            state.todos.push(task)
        },
        removeTodos:(state,action)=>{
            return state.todos.filter((todo)=>todo.id!==action.payload.id)
        }
    }
})

export const {addTodos,removeTodos} = todosSlice.actions
export default todosSlice.reducer
```

**store.js**
```js
import {configureStore} from "@reduxjs/toolkit"
import todosReducer from "../redux/todos/todosSlice"

const store = configureStore({
    reducer:todosReducer
})

export default store;
```

