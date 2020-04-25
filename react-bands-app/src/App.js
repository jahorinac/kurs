import React from 'react'
import Navbar from "./components/Navbar";
import BandsList from "./components/BandsList";
import ModalDialog from "./components/Modal";

class App extends React.Component{

    state = {
        bands: [],
        currentBand: {},
        show: false
    };

    changeCurrentBand = (band) => {
        this.setState({
            currentBand: band
        });

        this.handleShow()
    };

    handleClose = () => {
        this.setState({
            show: false
        })
    };

    handleShow = () => {
        this.setState({
            show: true
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
                <ModalDialog show={this.state.show} handleClose={this.handleClose} currentBand={this.state.currentBand}/>
            </>
        )
    }
}

export default App;