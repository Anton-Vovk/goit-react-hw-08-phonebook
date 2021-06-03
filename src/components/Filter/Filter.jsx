import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.css';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      <h3 className={styles.filterTitle}>Find contacts by name</h3>
      <input
        className={styles.filterInput}
        name='filter'
        type='text'
        value={filter}
        onChange={handleChange}
        placeholder='...'
      ></input>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
