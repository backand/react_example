import React, { Component } from 'react';

export class Login extends Component {

  render() {
    return (
      <div>
        <label>Choose authentication type:</label>

        <div>
          <label>Username</label>
          <input ref="username"/>
        </div>
        <div>
          <label>Password</label>
          <input ref="password"/>
        </div>


        <button onClick={ this.getAuthTokenSimple.bind(this) } className="btn btn-success">Token Auth
        </button>
        <button onClick={ this.useAnoymousAuth.bind(this) } className="btn btn-danger">Anonymous Auth
        </button>

        <br/>
        { /* <label>Using { auth_type } authentication</label>
        <div>
          <label>{ auth_status }</label>
        </div> */ }

      </div>
    );
  }

  getAuthTokenSimple() {
    console.log(this.refs.username.value, this.refs.password.value);
  }

  useAnoymousAuth() {

  }

}