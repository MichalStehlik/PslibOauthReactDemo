import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from './components/General/NotFound';
import Protected from './components/Protected';
import Public from './components/Public';
import { AuthProvider } from "./providers/AuthProvider";
import SignInCallback from "./components/Auth/SignInCallback";
import SignOutCallback from "./components/Auth/SignOutCallback";
import SilentRenewCallback from "./components/Auth/SilentRenewCallback";

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
        <AuthProvider>
              <Layout>
                      <Routes>
                            <Route path="/oidc-callback" element={<SignInCallback />} />
                            <Route path="/oidc-signout-callback" element={<SignOutCallback />} />
                            <Route path="/oidc-silent-renew" element={<SilentRenewCallback />} />
                            <Route index path='/' element={<Home />} />
                            <Route path="/sign-in" element={<Home />} />
                            <Route path="/sign-out" element={<Home />} />
                            <Route path='/public' element={<Public />} />
                            <Route path='/protected' element={<Protected />} />
                            <Route path="*" element={<NotFound />} />
                      </Routes>
            </Layout>
        </AuthProvider>
    );
  }
}
