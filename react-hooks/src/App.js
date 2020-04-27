import React, {Component} from 'react';
import Main from './Main/Main'


export const NameContext = React.createContext();

class App extends Component {

    state= {
        name: "Danilo"
    };

    render() {
        return (
            <div className="container text-center">
                <NameContext.Provider value={this.state.name}>
                    <Main/>
                </NameContext.Provider>
            </div>
        );
    }
}

export default App;