import './login.scss';

function LoginForm(): JSX.Element {
  return (
    <section className="container login">
      <form className="login__form" action="#" method="post">
        <h2 className="heading">Войти</h2>
        <fieldset className="login__field">
          <label className="login__label" htmlFor="mail">Почта</label>
          <input className="login__input" type="email" id="mail"/>
        </fieldset>
        <fieldset className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input className="login__input" type="password" id="password"/>
        </fieldset>
        <button className="login__button" type="submit">Войти</button>
      </form>
    </section>
  );
}

export default LoginForm;