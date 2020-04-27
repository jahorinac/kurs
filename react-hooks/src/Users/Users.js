// import React, { useEffect, useState } from 'react';
//
// function Users() {
//
//     const [users, setUsers] = useState([]);
//
//     useEffect(()=>{
//         console.log("Component render finished")
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(result => {
//                 setUsers(result)
//             })
//     }, []);
//
//
//     return (
//         <div className="container text-center">
//             <h1>Users</h1>
//             {users.map(user => {
//                 return <li key={user.id}>{user.name}</li>
//             })}
//         </div>
//     );
// }
//
// export default Users;
//========================================================================================
// import React, {useState, useEffect} from 'react';
//
// function Users() {
//
//     const [account, setAccount] = useState({name: 'Danilo', deposit:11000});
//
//     useEffect(()=>{
//         console.log('Rendering')
//     }, [account.deposit])
//
//     return (
//         <div className="containr text-center">
//             <h1>{account.name} ----- {account.deposit}</h1>
//             <input type="text" placeholder="name" onChange={e => setAccount({...account, name:e.target.value})}/>
//             <input type="text" placeholder="deposit" onChange={e => setAccount({...account, deposit:e.target.value})}/>
//         </div>
//     );
// }
//
// export default Users;
//========================================================================================
import React, {useState, useEffect} from 'react';

function Users() {

    const [display, setDisplay] = useState(true);

    useEffect(()=>{
        console.log('Rendering')

        return () => {
            console.log("Component unmounted")
        }

    }, [display])

    return (
        <div className="containr text-center">
            <button onClick={()=>{setDisplay(!display)}}>Toggle</button>
            {display && <div style={{width: "200px", height:"200px", background:"tomato"}}></div>}
        </div>
    );
}

export default Users;