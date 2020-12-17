import React, { useState ,useContext } from "react";
import "../App.css";
import Button from '@material-ui/core/Button';
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () =>{

    const [text , setText] = useState("");
    const [amount , setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit =(e)=>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() *10000000),
            text,
            amount: +amount
        }
             addTransaction(newTransaction);
    }
    return(
        <div>
        <h3 className = "head">Add new transaction</h3>
        <form onSubmit = {onSubmit}>
        <div className = "text">
        <label>Text:</label><br/>
        <input value = {text} onChange = {(e) =>{setText(e.target.value)}} placeholder = "enter text" />
        </div>
        <div className = "amount">
        <label >Amount:<br/>(negative - expense , positive - income)</label><br/>
        <input value = {amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder = "enter the amount"/>
        </div>
        <Button type = "submit" style = {{backgroundColor:"blueviolet" ,marginTop:"1cm" ,fontFamily:"cursive" ,fontWeight:"bold"}}>Add Transaction</Button>
        </form>
        </div>
    )
}

export default AddTransaction;