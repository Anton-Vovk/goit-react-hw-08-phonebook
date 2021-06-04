import Axios from 'axios';
import {
  addContactRequest,
  addContactSucces,
  addContactError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsError,
} from './phonebook-actions';

Axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await Axios.get('/contacts');
    dispatch(fetchContactsSucces(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const items = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await Axios.post('/contacts', items);
    dispatch(addContactSucces(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    Axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSucces(id));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export { addContact, deleteContact, fetchContacts };
