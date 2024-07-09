import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { fetchUserData } from "./redux/userRedux/userActions";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserData())  
  }, [])

  const { data, isLoading, error } = useSelector(state => state.user);

  console.log("Data is ",data)
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
