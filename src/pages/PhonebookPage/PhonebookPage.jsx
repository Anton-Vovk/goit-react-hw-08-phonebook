import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import styles from './PhonebookPage.module.css';
import { connect } from 'react-redux';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';
import { getLoading } from '../../redux/phonebook/phonebook-selectors';

class Phonebook extends Component {
  componentDidMount() {
    this.props.renderContacts();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className={styles.container}>
        <h1 className={styles.phonebook}>PHONEBOOK</h1>
        <ContactForm />
        <h2 className={styles.contacts}>CONTACTS</h2>
        <Filter />

        <ContactList />
        {isLoading && (
          <Loader type="Watch" color="#777" height={100} width={100} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  renderContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
