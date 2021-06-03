import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
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

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = event => {
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

  render () {
    const { name, number } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div className={styles.inputSection}>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>
            Name
            <br />
            <input
              className={styles.input}
              name='name'
              type='text'
              value={name}
              onChange={handleChange}
              placeholder='...'
            ></input>
            <label className={styles.label}>
              Number
              <br />
              <input
                className={styles.input}
                name='number'
                type='number'
                value={number}
                onChange={handleChange}
                placeholder='...'
              ></input>
            </label>
            <button className={styles.button} type='submit'>
              Add contact
            </button>
          </label>
        </form>
      </div>
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
