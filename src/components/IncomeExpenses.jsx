import React, { useContext } from "react";
import "../App.css";
import {GlobalContext} from "../context/GlobalState"

const IncomeExpenses = ()=>{
    const {transaction} = useContext(GlobalContext)
    
    const amounts = transaction.map((val) =>val.amount)
    const income = amounts
    .filter((val)=> val>0)
    .reduce((acc , item)=> acc +=item ,0)
    .toFixed(2)

    const expense = amounts.filter((val)=>val< 0).reduce((acc , item)=> acc+= item ,0).toFixed(2)
    return(
        <div>
           <div className = "income">
           <h4> income</h4> 
           <p>{income}</p>
           </div>
           <div className = "expenses">
           <h4> expenses</h4>
           <p>{expense}</p>
           </div>
        </div>
    )
}
export default IncomeExpenses;