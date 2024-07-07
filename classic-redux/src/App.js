import { useState } from "react";
import {useDispatch} from "react-redux"
import { addAmount, withdrawAmount } from "./redux/bankPaymentRedux/bankPaymentActions";

function App() {
  const dispatch = useDispatch()
  const [amount,setAmount] = useState(0)
  
  const handleAddAmount = ()=>{
    dispatch(addAmount(amount))
  }

  const handleWithdrawAmount = ()=>{
    dispatch(withdrawAmount(amount))
  }
  
  return (
    <div className="App">
      <div className="add-amount">
        <label>Add Amount</label>
        <input type="number" onChange={(e)=>setAmount(e.target.value)} value={amount} />
        <button onClick={handleAddAmount}>Add Amount</button>
      </div>
      <div className="remove-amount">
        <label>Remove Amount</label>
        <input type="number" onChange={(e)=>setAmount((amt)=>amt-e.target.value)} value={amount}/>
        <button onClick={handleWithdrawAmount}>Withdraw Amount</button>
      </div>
    </div>
  );
}

export default App;
