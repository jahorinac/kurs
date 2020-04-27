import React, { useState }from 'react'
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from './components/AddAccount/AddAccount';
import EditTable from './components/EditTable/EditTable'
import EditAccount from './components/EditAccount/EditAccount';


function App() {

    const [accounts, setAccounts] = useState([
        {id:1, name:'Petar', lastName:'Petrovic', phone: '065123456', email: 'petar@gmail.com'},
        {id:2, name:'Aco', lastName:'Cuca', phone: '065456555', email: 'cuca@gmail.com'},
        {id:3, name:'Nenad', lastName:'Ilic', phone: '065456777', email: 'ilic@gmail.com'},
        {id:4, name:'Igor', lastName:'Cupara', phone: '065456123', email: 'cupara@gmail.com'}
    ]);

    const addNewAccountToState = (acc) => {

        setAccounts([...accounts, acc])

    };

    const deleteAccount = (id) => {

        const newCopyAccount = accounts.filter(account => account.id !== id);

        setAccounts(newCopyAccount)
    };

    const editAccount = (acc) => {

        let accountPosition = accounts.map(account => account.id ).indexOf(acc.id)
        accounts[accountPosition] = acc;

        setAccounts(accounts);
    };


    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/'>
                <AccountsTable accounts={ accounts }/>
            </Route>
            <Route path='/add'>
                <AddAccount addNewAccountToState={ addNewAccountToState }/>
            </Route>
            <Switch>
                <Route path="/edit/:id">
                    <EditAccount accounts={ accounts } editAccount={ editAccount }/>
                </Route>
                <Route path="/edit">
                    <EditTable accounts={ accounts } deleteAccount={ deleteAccount }/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App