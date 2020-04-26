import React, {useState} from 'react'
import './Ball.css'

const Ball = () => {

    const [position, moveRight] = useState(0);

    const style = {
        left: position + 'px'
    };
    
    function moveBall() {
        for (let i = 0; i < 5; i++){
            moveRight(prevPosition => prevPosition + 20)
        }
    }

    return(
        <div className="Ball" onClick={moveBall} style={style}>

        </div>
    )
};

export default Ball