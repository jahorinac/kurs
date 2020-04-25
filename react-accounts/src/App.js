import React, {Component} from 'react'
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from 'react-router-dom'
import AccountsTable from "./components/AccountsTable/AccountsTable";


class App extends Component{

    state = {
        accounts:[
            {id:1, name:'Petar', lastname:'Petrovic', phone: '065123456', email: 'petar@gmail.com'},
            {id:2, name:'Aco', lastname:'Cuca', phone: '065456555', email: 'cuca@gmail.com'},
            {id:3, name:'Nenad', lastname:'Ilic', phone: '065456777', email: 'ilic@gmail.com'},
            {id:4, name:'Igor', lastname:'Cupara', phone: '065456123', email: 'cupara@gmail.com'}
        ]
    }
    render() {
        return(
            <BrowserRouter>
                <Header/>
                <Route to='/'>
                    <AccountsTable accounts={this.state.accounts}/>
                </Route>
            </BrowserRouter>
        )
    }
}

export default App