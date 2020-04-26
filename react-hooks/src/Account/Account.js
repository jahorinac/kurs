import React, { useState }from 'react'

function Account() {

    const [account, setAccount] = useState({name: 'Danilo', deposit:'11000'})

    return (
        <div className="container text-center">
            <h1>Name: {account.name} </h1>
            <h1>Name: {account.deposit} </h1>

            <input type="text"
            placeholder="set deposit"
            onChange={(e) => setAccount ({...account, deposit: e.target.value})}
            />
        </div>
    )
}

export default Account