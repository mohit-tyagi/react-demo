/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { ModalPopup } from './pages/Modal-popup/Loadable';
import { Navigation } from './pages/Navigation/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { NavigationDesktop } from './pages/Navigation-Desktop/Loadable';
import { PdpShoes } from './pages/Pdp-shoes/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/modal'}
          component={ModalPopup}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/navigation'}
          component={Navigation}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/pdp'}
          component={PdpShoes}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/navigation-desktop'}
          component={NavigationDesktop}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
