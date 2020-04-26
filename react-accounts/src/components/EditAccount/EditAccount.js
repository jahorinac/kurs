import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class EditAccount extends Component{

    state = {
        account : {
            id: '',
            name: '',
            lastName: '',
            phone:'',
            email:''
        }
    };

    componentDidMount() {
        const accountForEdit = this.props.accounts.filter( acc => acc.id == this.props.match.params.id )[0];

        this.setState({
            account: accountForEdit
        })
    }

    changeAccount = (e) => {
        const copyOfAccount = {...this.state.account};
        copyOfAccount[e.target.id] = e.target.value

        this.setState({
            account: copyOfAccount
        })
    };

    editAccount = () => {
        this.props.editAccount(this.state.account);
        this.props.history.push('/')
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">
                            Edit Account
                        </h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" value={this.state.account.name} onChange={this.changeAccount} id="name" className="form-control" placeholder="name" /><br/>
                                <input type="text" value={this.state.account.lastName} onChange={this.changeAccount} id="lastName" className="form-control" placeholder="lastname" /><br/>
                                <input type="text" value={this.state.account.phone} onChange={this.changeAccount} id="phone" className="form-control" placeholder="phone" /><br/>
                                <input type="email" value={this.state.account.email} onChange={this.changeAccount} id="email" className="form-control" placeholder="email" /><br/>
                                <button onClick={this.editAccount} className="btn btn-info form-control">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditAccount)