import './contacts.scss';
import './catalog.scss';
import './contacts-card.scss';
import CatalogList from '../catalog-list/catalog-list';

function Contacts(): JSX.Element {

  return (
    <section className="container contacts">
      <h2 className="heading">Контакты</h2>
      <div className="contacts">
        <div className="contacts__sorting">
          <input className="contacts__input" type="search" placeholder="Поиск по контактам"/>
          <select className="contacts__input" name="sorting" defaultValue={'default'}>
            <option value="default">По умолчанию</option>
            <option value="surname">По фамилии</option>
            <option value="name">По имени</option>
          </select>
        </div>
        <div className="catalog">
          <CatalogList />
        </div>
      </div>
    </section>
  );
}

export default Contacts;