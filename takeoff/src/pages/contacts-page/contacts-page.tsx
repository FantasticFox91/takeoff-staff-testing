import Contacts from "../../components/contacts/contacts";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function ContactsPage(): JSX.Element {
  return (
    <>
      <Header />
      <Contacts />
      <Footer />
    </>
  );
}

export default ContactsPage;