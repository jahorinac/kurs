import React, {Component} from 'react';

function WithCounter(MainComponent) {
    class NewComponent extends Component{
        render(){
            return(
                <MainComponent/>
            )
        }
    }
    return NewComponent
}

export default WithCounter;