import { Wrapper } from 'components/ContactsList/ContactsList.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { Section } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <>
      <Section>
        <h2>Phonebook</h2>
        <FormAddContact />
      </Section>
      <Section>
        <h3>Contacts</h3>
        <Filter />
        <Wrapper>
          <ContactsList>ContactsList</ContactsList>
        </Wrapper>
      </Section>
    </>
  );
};
