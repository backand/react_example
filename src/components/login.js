import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { getAuthTokenSimple, useAnonymousAuth } from 'actions/login';

export class Login extends Component {

  render() {

    const errorClasses = cx(
      this.props.authError ? 'alert alert-danger' : null
    );

    return (
      <div>
        <label>Choose authentication type:</label>

        <div>
          <label>Username</label>
          <input ref="username" defaultValue="test@angular2.com"/>
        </div>
        <div>
          <label>Password</label>
          <input ref="password" defaultValue="angular2"/>
        </div>

        <button onClick={ this._getAuthTokenSimple.bind(this) } className="btn btn-success">Token Auth
        </button>
        <button onClick={ this.props.useAnonymousAuth } className="btn btn-danger">Anonymous Auth
        </button>

        <br/>
        <label>Using { this.props.authType } authentication</label>
        <div className={ errorClasses }>
          <label>{ this.props.authStatus }</label>
        </div>

      </div>
    );
  }

  _getAuthTokenSimple() {
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    this.props.getAuthTokenSimple(username, password);
  }

}

const mapStateToProps = (state, action) => ({
  authStatus: state.ui.authStatus,
  authError: state.ui.authError,
  authType: state.user.authType
});

export default connect(mapStateToProps, { getAuthTokenSimple, useAnonymousAuth })(Login);
