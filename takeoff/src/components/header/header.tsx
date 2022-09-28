import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './header.scss';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container header__container">
        <h2 className='header__title title'>
          <Link className='header__link' to={AppRoute.Root}>Мои контакты</Link>
        </h2>
        <Link className='header__button primary-button' to={AppRoute.Login}>Войти</Link>
      </div>
    </header>
  );
}

export default Header;