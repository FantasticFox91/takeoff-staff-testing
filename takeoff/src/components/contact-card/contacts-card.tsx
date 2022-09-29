import { contact } from '../../types/contact';
import { useState, useRef, ChangeEvent } from 'react';

type ContactCardProps = {
  contact: contact,
  onSaveClick: (contact: contact) => void;
  onDeleteClick: (contact: contact) => void;
}

function ContactCard({contact, onSaveClick, onDeleteClick}: ContactCardProps): JSX.Element {
  const [contactLocal, setContact] = useState(contact);
  const [edtiMode, setEditMode] = useState(false);
  const nameInput = useRef<HTMLInputElement | null>(null);
  const surnameInput = useRef<HTMLInputElement | null>(null);
  const phoneInput = useRef<HTMLInputElement | null>(null);
  const mailInput = useRef<HTMLInputElement | null>(null);

  const fieldChangeHandler = (evt: ChangeEvent<(HTMLInputElement)>) => {
    const {name, value} = evt.target;
    setContact({...contactLocal, [name]: value});
  };

  const onSaveClickHandler = () => {
    if (nameInput.current !== null && surnameInput.current !== null && phoneInput.current !== null && mailInput.current !== null) {
      const newContact: contact = {
        id: contact.id,
        name: nameInput.current.value,
        surname: surnameInput.current.value,
        phone: phoneInput.current.value,
        email: mailInput.current.value,
      }
      onSaveClick(newContact);
      setContact(newContact);
      setEditMode(false);
    }
  }
  return (
      <li className="catalog__item">
          {edtiMode ? 
          <div className="contact-card contact-card--edit">
            <form className="contact-card__form" action="#" method="post" onSubmit={onSaveClickHandler}>
              <fieldset className="contact-card__field">
                <label className="contact-card__label" htmlFor="name">Имя</label>
                <input className="contact-card__input" ref={nameInput} type="text" id="name" name='name' value={contactLocal.name} onChange={(e) => fieldChangeHandler(e)} required/>
              </fieldset>
              <fieldset className="contact-card__field">
                <label className="contact-card__label" htmlFor="surname">Фамилия</label>
                <input className="contact-card__input" ref={surnameInput} type="text" id="surname" name='surname' value={contactLocal.surname} onChange={(e) => fieldChangeHandler(e)} required/>
              </fieldset>
              <fieldset className="contact-card__field">
                <label className="contact-card__label" htmlFor="phone">Номер телефона</label>
                <input className="contact-card__input" ref={phoneInput} type="tel" id="phone" name='phone' value={contactLocal.phone} onChange={(e) => fieldChangeHandler(e)} required/>
              </fieldset>
              <fieldset className="contact-card__field">
                <label className="contact-card__label" htmlFor="mail">Почта</label>
                <input className="contact-card__input" ref={mailInput} type="email" id="mail" name='email' value={contactLocal.email} onChange={(e) => fieldChangeHandler(e)} required/>
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
          <div className="contact-card">
            <img className="contact-card__avatar" src="default-user.png" alt="Автарка пользователя" width={100} height={100}/>
            <div className="contact-card__information">
              <p className="contact-card__text">{`${contactLocal.name} ${contactLocal.surname}`}</p>
              <p className="contact-card__text">{contactLocal.phone}</p>
              <p className="contact-card__text">{contactLocal.email}</p>
            </div>
            <div className='contact-card__buttons'>
              <button className="contact-card__button contact-card__button--edit" onClick={() => setEditMode(true)} type="button">
                <span className="visually-hidden">Редактикровать</span>
              </button>
              <button className="contact-card__button contact-card__button--delete" type="button" onClick={() => onDeleteClick(contact)}>
                <span className="visually-hidden">Удалить</span>
              </button>
            </div>
          </div>
        }
      </li>
  );
}

export default ContactCard;