import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  SubmitHandler = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.SubmitHandler}>
          <label className={styles.loginLabel}>
            <span className={styles.inputTitle}>Email</span>
            <input
              className={styles.loginInput}
              type="email"
              name="email"
              value={email}
              onChange={this.inputHandler}
            ></input>
          </label>
          <label className={styles.loginLabel}>
            <span className={styles.inputTitle}>Password</span>
            <input
              className={styles.loginInput}
              type="password"
              name="password"
              value={password}
              onChange={this.inputHandler}
            ></input>
          </label>
          <button className={styles.loginButton}>Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
