import { ButtonDelete, ItemList } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ItemList key={id}>
        <p>
          {name}: {number}
        </p>
        <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </ButtonDelete>
      </ItemList>
    ))}
  </ul>
);

export default ContactList;
