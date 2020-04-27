import React from 'react';
import {NameContext} from "../App";

function Aside() {
    return (
        <div>
            <NameContext.Consumer>
                {
                    name => {
                        return <h1>Aside name: {name}</h1>
                    }
                }
            </NameContext.Consumer>
        </div>
    );
}

export default Aside;