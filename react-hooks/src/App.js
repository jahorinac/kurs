import React, {useState} from 'react';
import Main from './Main/Main'

export const NameContext = React.createContext();
export const LastNameContext = React.createContext();


function App() {

    const [name] = useState("Danilo");
    const [lastName] = useState("Vesovic");

        return (
            <div className="container text-center">
                <NameContext.Provider value={name}>
                    <LastNameContext.Provider className="Provider" value={lastName}>
                        <Main/>
                    </LastNameContext.Provider>
                </NameContext.Provider>
            </div>
        )
}

export default App;