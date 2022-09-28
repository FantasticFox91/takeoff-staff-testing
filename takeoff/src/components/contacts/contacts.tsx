import './contacts.scss';
import './catalog.scss';
import './contacts-card.scss';

function Contacts(): JSX.Element {
  return (
    <section className="container contacts">
      <h2 className="heading">Контакты</h2>
      <div className="contacts">
        <div className="contacts__sorting">
          <input className="contacts__input" type="search" placeholder="Поиск по контактам"/>
          <select className="contacts__input" name="sorting">
            <option value="default" selected>По умолчанию</option>
            <option value="surname">По фамилии</option>
            <option value="name">По имени</option>
          </select>
        </div>
        <div className="catalog">
          <ul className="catalog__list">
            <li className="catalog__item">
              <div className="contact-card">
                <img className="contact-card__avatar" src="default-user.png" alt="Автарка пользователя" width={100} height={100}/>
                <div className="contact-card__information">
                  <p className="contact-card__text">Имя Фамилия</p>
                  <p className="contact-card__text">+7 555 555 55 55</p>
                  <p className="contact-card__text">test@test.com</p>
                </div>
                <div className='contact-card__buttons'>
                  <button className="contact-card__button contact-card__button--edit" type="button">
                    <span className="visually-hidden">Редактикровать</span>
                  </button>
                  <button className="contact-card__button contact-card__button--delete" type="button">
                    <span className="visually-hidden">Удалить</span>
                  </button>
                </div>
              </div>
            </li>
            <li className="catalog__item">
              <div className="contact-card contact-card--add">
                <h3>Добавить контакт</h3>
                <button className='contact-card__button contact-card__button--add' type="button"></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contacts;