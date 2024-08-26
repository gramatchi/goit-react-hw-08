import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
