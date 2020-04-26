import React, {useState} from 'react'

function NameList() {

    const [names, setNames] = useState(['Danilo', 'Marko']);
    const [newName, setNewName] = useState('')

    const saveName = () => {
        setNames([...names, newName])
        setNewName('')
    };

    return(
        <div className="container text-center">
            <ul className="list-group">
                {names.map(name => <li className="list-item">{name}</li> )}
            </ul>

            <input type="text" onChange={e => {setNewName(e.target.value)}} value={newName}/>
            <button onClick={saveName}>Add</button>
        </div>
    )
}

export default NameList