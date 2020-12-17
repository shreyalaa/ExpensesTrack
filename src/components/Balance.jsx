import React, { useContext } from "react";
import "../App.css"
import { GlobalContext } from "../context/GlobalState";
const Balance = () =>
{   
    const {transaction} = useContext(GlobalContext);

    const amounts = transaction.map((value)=> value.amount)
    const total = amounts.reduce((acc , item)=>(acc += item), 0).toFixed(2)
    return(
        <div className ="balance">
        <h4> Your Balance</h4>
        <h1> {total}</h1>
        </div>
    )
}

export default Balance;