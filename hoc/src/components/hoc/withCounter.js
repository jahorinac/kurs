import React, {Component} from 'react';

function WithCounter(MainComponent) {
    class NewComponent extends Component{

        state = {
            counter:0
        };

        incCounter = () => {
            this.setState({
                counter: this.state.counter + 1
            })
        }

        render(){

            console.log(this.props.name)
            return(
                <MainComponent name={ this.props.name} counter={this.state.counter} incCounter={this.incCounter}/>
            )
        }
    }
    return NewComponent
}

export default WithCounter;