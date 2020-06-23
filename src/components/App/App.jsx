import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import ComparePage from "../../pages/ComparePage/ComparePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import DeliveryPage from "../../pages/DeliveryPage/DeliveryPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import Footer from "../../components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={CatalogPage} path="/lamps/:type" exact />
        <Route component={ComparePage} path="/compare" />
        <Route component={DeliveryPage} path="/delivery" />
        <Route component={ContactsPage} path="/contacts" />
        <Route component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
