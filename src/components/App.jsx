import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactFrom from "./ContactFrom";
import ContactList from "./contactList";
import Filter from "./Filter";
import { Seccion,TitlePhone, SectionContact, TitleContact } from "./App.styled";


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  };

  addContact = ({ name, number }) => {
    const minusName = name.toLowerCase();
    const findName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === minusName
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid()}, ...contacts],
    })
    );
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const minusName = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(minusName)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  viewfilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value});
  };

  render() {
    const { filter } = this.state;
    const viewContacts = this.filterContacts();

    return (
      <div>
        <Seccion title= "Phonebook">
          <TitlePhone>Phonebook</TitlePhone>
          <ContactFrom onSubmit={this.addContact} />
        </Seccion>
        <SectionContact title="Contacts">
          <TitleContact>Contacts</TitleContact>
          <Filter value={filter} onChange={this.viewfilter} />
          <ContactList contacts={ viewContacts } onDeleteContact={ this.deleteContact } />
        </SectionContact>
      </div>
    );
  }
}

export default App;
