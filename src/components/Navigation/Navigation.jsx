import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLogged } from '../../redux/auth/auth-selector';
import styles from './Navigation.module.css';

const Navigation = ({ isLogged }) => {
  console.log(isLogged);
  return (
    <div>
      <ul className={styles.navigation}>
        <li>
          <NavLink
            className={styles.link}
            exact
            className=''
            activeClassName=''
            to='/'
          >
            <button className={styles.btn} type='button'>
              Home
            </button>
          </NavLink>
        </li>
        <li>
          {isLogged && (
            <NavLink exact className='' activeClassName='' to='/contacts'>
              <button className={styles.btn} type='button'>
                Contacts
              </button>
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  isLogged: getLogged(state),
});

export default connect(mapStateToProps)(Navigation);
