import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function MainPage(): JSX.Element {

  return (
    <>
      <Header />
      <section className="container text-container">
        <h2>Добро пожаловать в менеджер контактов</h2>
        <p>Войдите что бы начать пользоваться приложением</p>
      </section>
      <Footer />
    </>
  );
}

export default MainPage;