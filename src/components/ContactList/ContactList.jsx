import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={styles.listSection}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            {name} - {number}
            <button
              className={styles.button}
              type='button'
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
