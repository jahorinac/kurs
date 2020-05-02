import React, {Component} from 'react';
import './TomatoBox.css'
import withCounter from '../hoc/withCounter'

class TomatoBox extends Component {

    render() {
        return (
            <div className="TomatoBox" onClick={this.props.incCounter}>
                {this.props.counter}
                <span>{this.props.name}</span>
            </div>
        );
    }
}

export default withCounter(TomatoBox);