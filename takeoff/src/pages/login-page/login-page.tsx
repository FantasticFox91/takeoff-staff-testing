import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import LoginForm from "../../components/login-form/login-form";

function LoginPage(): JSX.Element {

  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}

export default LoginPage;