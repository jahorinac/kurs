import React, {Component} from 'react';
import './App.css'
import TomatoBox from './components/TomatoBox/TomatoBox'
import CadetBox from './components/CadetBox/CadetBox'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TomatoBox name="Danilo"/>
                <CadetBox/>
            </div>
        )
    }
}

export default App;