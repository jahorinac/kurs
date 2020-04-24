import React from 'react'
import Navbar from "./components/Navbar";
import BandsList from "./components/BandsList";

class App extends React.Component{

    state = {
        bands: []
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/jahorinac/kurs/master/data/bands.json')
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({
                    bands:data
                })
            })
    }

    render(){
        return(
            <>
                <Navbar />
                <BandsList bands={this.state.bands}/>
            </>
        )
    }
}

export default App;