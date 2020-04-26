import React, {Component} from 'react'
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from './components/AddAccount/AddAccount';
import EditTable from './components/EditTable/EditTable'
import EditAccount from './components/EditAccount/EditAccount';


class App extends Component{

    state = {
        accounts:[
            {id:1, name:'Petar', lastName:'Petrovic', phone: '065123456', email: 'petar@gmail.com'},
            {id:2, name:'Aco', lastName:'Cuca', phone: '065456555', email: 'cuca@gmail.com'},
            {id:3, name:'Nenad', lastName:'Ilic', phone: '065456777', email: 'ilic@gmail.com'},
            {id:4, name:'Igor', lastName:'Cupara', phone: '065456123', email: 'cupara@gmail.com'}
        ]
    }

    addNewAccountToState = (acc) => {
        this.setState({
            accounts:[...this.state.accounts, acc]
        })
    };

    deleteAccount = (id) => {
        const accountsCopy = [...this.state.accounts];
        const newCopyAccount = accountsCopy.filter(account => account.id !== id);
        this.setState({
            accounts: newCopyAccount
        })
    };

    editAccount = (acc) => {
        const copyAccounts = [...this.state.accounts]
        let accountPosition = copyAccounts.map(account => account.id ).indexOf(acc.id)
        copyAccounts[accountPosition] = acc;
        this.setState({
            accounts: copyAccounts
        })
    };

    render() {
        return(
            <BrowserRouter>
                <Header/>
                <Route exact path='/'>
                    <AccountsTable accounts={this.state.accounts}/>
                </Route>
                <Route path='/add'>
                    <AddAccount addNewAccountToState={this.addNewAccountToState}/>
                </Route>
                <Switch>
                    <Route path="/edit/:id">
                        <EditAccount accounts={this.state.accounts} editAccount={this.editAccount}/>
                    </Route>
                    <Route path="/edit">
                        <EditTable accounts={this.state.accounts} deleteAccount={this.deleteAccount}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App