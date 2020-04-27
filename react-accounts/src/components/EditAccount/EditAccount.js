import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'

function EditAccount(props){

    const [account, setAccount] = useState(props.accounts.filter( acc => acc.id == props.match.params.id )[0]);

    const editAccount = () => {
        props.editAccount(account);
        props.history.push('/')
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">
                        Edit Account
                    </h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input type="text" value={account.name} onChange={e=>{ setAccount({...account, name: e.target.value})}} id="name" className="form-control" placeholder="name" /><br/>
                            <input type="text" value={account.lastName} onChange={e=>{ setAccount({...account, lastName: e.target.value})}} id="lastName" className="form-control" placeholder="lastname" /><br/>
                            <input type="text" value={account.phone} onChange={e=>{ setAccount({...account, phone: e.target.value})}} id="phone" className="form-control" placeholder="phone" /><br/>
                            <input type="email" value={account.email} onChange={e=>{ setAccount({...account, email: e.target.value})}} id="email" className="form-control" placeholder="email" /><br/>
                            <button onClick={editAccount} className="btn btn-info form-control">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(EditAccount)