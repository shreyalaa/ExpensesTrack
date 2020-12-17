import React from "react";
import './App.css';
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";


const App =() =>{
  return (
    <GlobalProvider>
       <Header/>
       <div  className="App">
       <Balance/>
       <IncomeExpenses/>
       <TransactionList/>
       <AddTransaction></AddTransaction>
       </div>
    </GlobalProvider>
  );
}

export default App;