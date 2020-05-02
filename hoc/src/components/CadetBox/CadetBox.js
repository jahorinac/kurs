import React, {Component} from 'react';
import './CadetBox.css'
import withCounter from'../hoc/withCounter'

class CadetBox extends Component {

    render() {
        return (
            <div className="CadetBox" onClick={this.props.incCounter}>
                {this.props.counter}
            </div>
        );
    }
}

export default withCounter(CadetBox);