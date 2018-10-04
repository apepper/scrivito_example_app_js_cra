import React, { Component } from 'react';
import * as Scrivito from "scrivito";
import CurrentPageMetaData from "./Components/CurrentPageMetaData";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import Intercom from "./Components/Intercom";
import Navigation from "./Components/Navigation";
import NotFoundErrorPage from "./Components/NotFoundErrorPage";
import CookieConsent from "./Components/CookieConsent";
import './assets/stylesheets/index.scss';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
      <div>
        <div className="content-wrapper">
          <Navigation />
          <Scrivito.CurrentPage />
          <NotFoundErrorPage />
        </div>
        <Footer />
        <CookieConsent />
        <CurrentPageMetaData />
        <GoogleAnalytics />
        <Intercom />
      </div>
    </ErrorBoundary>
    );
  }
}

export default App;
