import { contact } from '../../types/contact';
import ContactCard from '../contact-card/contacts-card';
import { useState, useRef, ChangeEvent } from 'react';
import { CONTACTS } from '../../mock/contacts';


function CatalogList(): JSX.Element {
  const [edtiMode, setEditMode] = useState(false);
  const [contactLocal, setContact] = useState({
    id: 0,
    name: '',
    surname: '',
    phone: '',
    email: ''});
  const [contacts, setContactsList] = useState(CONTACTS)
  const nameInput = useRef<HTMLInputElement | null>(null);
  const surnameInput = useRef<HTMLInputElement | null>(null);
  const phoneInput = useRef<HTMLInputElement | null>(null);
  const mailInput = useRef<HTMLInputElement | null>(null);

  const changeContact = (contact: contact) => {
    const index = contacts.findIndex(el => el.id === contact.id);
    setContactsList([...contacts.slice(0, index), contact, ...contacts.slice(index + 1)])
  }

  const addContact = (contact: contact) => {
    setContactsList([...contacts, contact])
  }

  const deleteContact = (contact:contact) => {
    const index = contacts.findIndex(el => el.id === contact.id);
    setContactsList([...contacts.slice(0, index), ...contacts.slice(index + 1)])
  }

  const fieldChangeHandler = (evt: ChangeEvent<(HTMLInputElement)>) => {
    const {name, value} = evt.target;
    setContact({...contactLocal, [name]: value});
  };

  const contactsList = contacts.map((contact) => (
    <ContactCard key={contact.id} contact={contact} onSaveClick={changeContact} onDeleteClick={deleteContact}/>
  ));

  const addNewContact = (evt: any) => {
    evt.preventDefault();
    if (nameInput.current !== null && surnameInput.current !== null && phoneInput.current !== null && mailInput.current !== null) {
      setContact({
        id: Math.floor(Math.random() * 100),
        name: nameInput.current.value,
        surname: surnameInput.current.value,
        phone: phoneInput.current.value,
        email: mailInput.current.value,
      })
    }
    addContact(contactLocal);
    setEditMode(false);
  }

  return (
    <ul className="catalog__list">
      {contactsList}
      <li className="catalog__item">
      {edtiMode ? 
          <div className="contact-card contact-card--edit">
            <form className="contact-card__form" action="#" method="post" onSubmit={(e) => addNewContact(e)}>
              <fieldset className="contact-card__field">
                <label className="contact-card__label" htmlFor="name">Имя</label>
                <input className="contact-card__input" ref={nameInput} type="text" id="name" name='name' onChange={(e) => fieldChangeHandler(e)} required/>
              </fieldset>
              <fieldset className="contact-card__field">
                <label className="contact-card__label" htmlFor="surname">Фамилия</label>
                <input className="contact-card__input" ref={surnameInput} type="text" id="surname" name='surname' onChange={(e) => fieldChangeHandler(e)} required/>
              </fieldset>
              <fieldset className="contact-card__field">
                <label className="contact-card__label" htmlFor="phone">Номер телефона</label>
                <input className="contact-card__input" ref={phoneInput} type="tel" id="phone" name='phone' onChange={(e) => fieldChangeHandler(e)} required/>
              </fieldset>
              <fieldset className="contact-card__field">
                <label className="contact-card__label" htmlFor="mail">Почта</label>
                <input className="contact-card__input" ref={mailInput} type="email" id="mail" name='email' onChange={(e) => fieldChangeHandler(e)} required/>
              </fieldset>
              <div className="contact-card__buttons">
                <button className="contact-card__button contact-card__button--save" type="submit">
                  <span className="visually-hidden">Сохранить</span>
                </button>
                <button className="contact-card__button contact-card__button--cancel" type="button" onClick={() => setEditMode(false)}>
                  <span className="visually-hidden">Отменить</span>
                </button>
              </div>
            </form>
          </div>
          : 
        <div className="contact-card contact-card--add">
          <h3>Добавить контакт</h3>
          <button className='contact-card__button contact-card__button--add' type="button" onClick={() => setEditMode(true)}></button>
        </div>
      }
      </li>
    </ul>
  );
}

export default CatalogList;