import React, {Component} from 'react';
import './TomatoBox.css'
import withCounter from '../hoc/withCounter'

class TomatoBox extends Component {

    state = {
        counter: 0
    };

    incCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div className="TomatoBox" onClick={this.incCounter}>
                {this.state.counter}
            </div>
        );
    }
}

export default withCounter(TomatoBox);