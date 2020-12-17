import React, { createContext, useReducer } from  "react"
import AppReducer from "./AppReducer"
//initial state

const initialState ={
    transaction:[]
} 

//create context

export const GlobalContext = createContext(initialState)





//provider compnet

export const GlobalProvider = ({ children}) =>{
    const [state , dispatch] = useReducer(AppReducer , initialState)
    //Actions
    const addTransaction =(transaction)=>{
        dispatch({
            type: "ADD_transaction",
            payload:  transaction
        })
    } 

    const deleteTransaction = (id)=>{
        dispatch({
            type: "delete_transaction",
            payload: id
        })
    }
    return(
        <GlobalContext.Provider value = {{
            transaction: state.transaction,
            deleteTransaction,
            addTransaction
        }}>
         {children}
        </GlobalContext.Provider>
    )
}


