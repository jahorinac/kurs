import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Route exact path="/" component={ Home }>
                </Route>

                <Route path="/about" component={ About }>
                </Route>
            </BrowserRouter>
        )
    }
}

export default App
