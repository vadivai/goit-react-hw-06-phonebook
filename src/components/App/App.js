import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper } from 'components/ContactsList/ContactsList.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { Section } from './App.styled';
import { Filter } from 'components/Filter/Filter';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem('contacts');

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  // return [];
  return null; // можно null?
  // return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  const filteredItems = contacts.filter(item => {
    const hasName = item.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isExistContact = contacts.find(contact => {
      return contact.name.toLowerCase().includes(newContact.name.toLowerCase());
    });

    if (isExistContact) {
      return alert(`${newContact.name} is already in contacts`);
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);
  };

  const filterContacts = newFilter => {
    setFilter(newFilter);
  };

  const deleteContact = idContact => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== idContact)
    );
  };

  return (
    <>
      <Section>
        <h2>Phonebook</h2>
        <FormAddContact onAddContact={addContact} />
      </Section>
      <Section>
        <h3>Contacts</h3>
        <Filter filter={filter} onFilter={filterContacts} />
        <Wrapper>
          {filteredItems.length > 0 && (
            <ContactsList items={filteredItems} onDelete={deleteContact}>
              ContactsList
            </ContactsList>
          )}
        </Wrapper>
      </Section>
    </>
  );
};
