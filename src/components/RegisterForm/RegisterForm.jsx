import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import styles from './RegisterForm.module.css';

class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  inputHandler = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  SubmitHandler = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <div>
        <form onSubmit={this.SubmitHandler} className={styles.form}>
          <label className={styles.registrationLabel}>
            <span className={styles.inputTitle}>Name</span>
            <input
              className={styles.registrationInput}
              type="text"
              name="name"
              value={name}
              onChange={this.inputHandler}
            ></input>
          </label>
          <label className={styles.registrationLabel}>
            <span className={styles.inputTitle}>Email</span>

            <input
              className={styles.registrationInput}
              type="email"
              name="email"
              value={email}
              onChange={this.inputHandler}
            ></input>
          </label>
          <label className={styles.registrationLabel}>
            <span className={styles.inputTitle}>Password</span>
            <input
              className={styles.registrationInput}
              type="password"
              name="password"
              value={password}
              onChange={this.inputHandler}
            ></input>
          </label>
          <button className={styles.registrationButton} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
