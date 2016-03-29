import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import {getAuthTokenSimple, useAnonymousAuth} from 'actions/login';

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
          <input ref="username" defaultValue="react@backand.com"/>
        </div>
        <div>
          <label>Password</label>
          <input ref="password" defaultValue="react1234"/>
        </div>
        <br/>
        <button onClick={ this._getAuthTokenSimple.bind(this) }
                className="btn btn-success">Token Auth
        </button>
        <button onClick={ this.props.useAnonymousAuth }
                className="btn btn-danger">Anonymous Auth
        </button>

        <br/>
        <label>Using { this.props.authType } authentication</label>
        <div className={ errorClasses }>
          <label>{ this.props.authStatus } {this.props.username}</label>
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

Login.PropTypes = {
  authStatus: PropTypes.string.required,
  authType: PropTypes.string.required,
  authError: PropTypes.bool.required,
  username: PropTypes.string.required
};

const mapStateToProps = (state, action) => ({
  authStatus: state.user.authStatus,
  authType: state.user.authType,
  authError: state.user.authError,
  username: state.user.username
});

export default connect(mapStateToProps, {
  getAuthTokenSimple,
  useAnonymousAuth
})(Login);
