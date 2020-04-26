import React, { useState } from 'react'

function App(){

    const [name, changeName] = useState('');

    return(
        <div className="container text-center">
            <h1>{ name }</h1>
            <input type="text" onChange={ (e)=> changeName(e.target.value) }/>
        </div>
    )
}

export default App