import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

function App() {
  const authStatus = AuthorizationStatus.Auth;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element=
            {
              <MainPage />
            }
        />
        <Route
          path={AppRoute.Contacts}
          element=
            {
              <PrivateRoute authorizationStatus={authStatus}>
                <ContactsPage />
              </PrivateRoute>
            }
        />
                <Route
          path={AppRoute.Login}
          element=
            {
              <LoginPage />
            }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
