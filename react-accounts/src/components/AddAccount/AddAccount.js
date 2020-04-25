import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class AddAccount extends Component{

    state={
        newAccount : {
            id : '',
            name : '',
            lastName : '',
            phone : '',
            email : '',
        }
    };

    changeHandler = (e) =>{

        let id = e.target.id
        let newAccountCopy = {...this.state.newAccount}
        newAccountCopy[id] = e.target.value;
        this.setState({
            newAccount: newAccountCopy
        })

    };

    addNewAccount = () => {
        this.props.addNewAccountToState(this.state.newAccount)
        this.props.history.push('/')
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">
                            Add Account
                        </h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" onChange={this.changeHandler} id="id" className="form-control" placeholder="id" /><br/>
                                <input type="text" onChange={this.changeHandler} id="name" className="form-control" placeholder="name" /><br/>
                                <input type="text" onChange={this.changeHandler} id="lastName" className="form-control" placeholder="lastname" /><br/>
                                <input type="text" onChange={this.changeHandler} id="phone" className="form-control" placeholder="phone" /><br/>
                                <input type="email" onChange={this.changeHandler} id="email" className="form-control" placeholder="email" /><br/>
                                <button onClick={this.addNewAccount} className="btn btn-primary form-control">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddAccount)

