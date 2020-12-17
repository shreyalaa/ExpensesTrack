import React, { useContext } from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import "../App.css";
import {GlobalContext} from "../context/GlobalState"
import Transaction from "./Transaction";
const TransactionList = () =>{
    const {transaction} = useContext(GlobalContext);
    console.log(transaction)

    return(
        <div>
         <h4 className = "history">History</h4>
         <ul >
         {transaction.map((trans)=>(
            <Transaction id = {trans.id} amount = {trans.amount} key = {trans.id} trans = {trans.text}/>
         ))}
        
         </ul>
        </div>
    )
}
export default TransactionList;