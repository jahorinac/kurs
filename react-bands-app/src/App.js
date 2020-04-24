import React from 'react'

class App extends React.Component{

    state={
        bands: []
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/jahorinac/kurs/master/data/bands.json')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
    }

    render(){
        return(
            <h1>App Component</h1>
        )
    }
}

export default App;