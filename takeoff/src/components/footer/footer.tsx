import { Link } from 'react-router-dom';
import './footer.scss';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <p>Проект выполнен <Link className='footer__link' to="https://github.com/FantasticFox91">FantasticFox91</Link> в 2022</p>
      </div>
    </footer>
  );
}

export default Footer;