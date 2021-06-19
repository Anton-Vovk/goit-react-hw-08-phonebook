import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';

class ContactForm extends Component {
  static propTypes = {
    createContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  ChangeHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  SubmitHandler = event => {
    event.preventDefault();
    const { name, number } = this.state;

    const hasContactName = this.props.myContacts.some(item => {
      return item.name === name;
    });
    const hasContactNumber = this.props.myContacts.some(item => {
      return item.number === number;
    });

    if (hasContactName) {
      alert(`${name} is already in contacts!!!`);
      return;
    }
    if (hasContactNumber) {
      alert(`${number} is already in contacts!!!`);
      return;
    }

    this.props.createContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.SubmitHandler}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              name="name"
              type="text"
              value={name}
              onChange={this.ChangeHandler}
              placeholder="Add name"
              required
            ></input>
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              name="number"
              type="tel"
              value={number}
              onChange={this.ChangeHandler}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              placeholder="111-11-11"
              required
            ></input>
          </label>
          <button className={styles.button} type="submit">
            Add contact
          </button>
          <ToastContainer autoClose={3000} />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  myContacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  createContact: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
