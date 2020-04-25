import React, {Component} from 'react'
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from 'react-router-dom'
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from './components/AddAccount/AddAccount'


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
            </BrowserRouter>
        )
    }
}

export default App