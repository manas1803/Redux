import { useState } from "react";
import {useDispatch} from "react-redux"
import { addAmount } from "./redux/bankPayment/bankPaymentAction";

function App() {
  const dispatch = useDispatch()
  const [amount,setAmount] = useState(0)
  const [loan,setLoan] = useState(0)
  
  const handleAddAmount = ()=>{
    dispatch(addAmount(amount))
  }
  
  return (
    <div className="App">
      <div className="add-amount">
        <label>Add Amount</label>
        <input type="number" onChange={(e)=>setAmount(e.target.value)} value={amount} />
        <button onClick={handleAddAmount}>Add Amount</button>
      </div>
      <div className="take-loan">
        <label>Take Loan</label>
        <input type="number" onChange={(e)=>setLoan(e.target.value)} value={loan}/>
        <button>Take Loan</button>
      </div>
      <div className="remove-amount">
        <label>Remove Amount</label>
        <input type="number" onChange={(e)=>setAmount((amt)=>amt-e.target.value)} value={amount}/>
        <button>Remove Amount</button>
      </div>
    </div>
  );
}

export default App;
