import React from 'react'
import Navbar from "./components/Navbar";
import BandsList from "./components/BandsList";
import Modal from "./components/Modal";

class App extends React.Component{

    state = {
        bands: [],
        currentBand: {}
    };

    changeCurrentBand = (band) => {
        console.log(band)

        this.setState({
            currentBand: band
        })
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
        console.log(this.state)
        return(
            <>
                <Navbar />
                <BandsList bands={this.state.bands} changeCurrentBand={this.changeCurrentBand}/>
                <Modal currentBand={this.state.currentBand}/>
            </>
        )
    }
}

export default App;