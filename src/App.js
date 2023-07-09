import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorizerProvider , useAuthorizer } from '@authorizerdev/authorizer-react';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './Navbar'
import Root from './Root'
const App = () => {
 
  return (
    <BrowserRouter>
     <AuthorizerProvider
        config={{
          authorizerURL: 'https://authorizer.devkraft.in/',
          redirectURL: window.location.origin,
          clientID: 'c8090ef7-48da-4832-ab65-24163652be73',
          extraHeaders: {},
        }}
      >
       <Root/>
      </AuthorizerProvider>
    </BrowserRouter>
  );
}

export default App;