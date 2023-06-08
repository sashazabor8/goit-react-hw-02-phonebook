import React, { Component } from 'react';
import Container from './Container';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  addContact = newContact => {
    if (
      this.state.contacts.find(
        ({ name }) =>
          newContact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  getFilteredList = () => {
    const { filter, contacts } = this.state;

    const optimizedFilter = filter.toLocaleLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(optimizedFilter)
    );
  };

  removeContacts = removeId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== removeId),
    }));
  };

  render() {
    return (
      <>
        <Container title="Phonebook">
          <Form addContact={this.addContact} />
        </Container>
        <Container title="Contacts">
          <Filter filter={this.state.filter} filterChange={this.filterChange} />
          <Contacts
            contacts={this.getFilteredList()}
            removeContacts={this.removeContacts}
          />
        </Container>
      </>
    );
  }
}

export default App;
