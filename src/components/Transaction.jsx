import React, { useContext } from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import { GlobalContext } from "../context/GlobalState";
const Transaction = (props)=>{
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = (props.amount <0)? '-' : '+'
        return(
        <li className = "list" > 
            {props.trans} <span >||   {sign}Rs. {Math.abs(props.amount)}</span>
            <Button onClick = {()=>deleteTransaction(props.id)} ><DeleteForeverIcon/></Button>
            </li>
    )
}
export default Transaction;