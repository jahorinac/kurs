import React, {Component} from 'react';
import './CadetBox.css'

class CadetBox extends Component {

    state = {
        counter: 0
    };

    incCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    render() {
        return (
            <div className="CadetBox" onClick={this.incCounter}>
                {this.state.counter}
            </div>
        );
    }
}

export default CadetBox;