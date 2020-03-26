import React from 'react';
import Layout from './pages/layout/Layout';
import AuthProvider from './ui/auth-provider/AuthProvider';

export const WrapPage = ({ element, props }) => (<Layout {...props}>{element}</Layout>);

export const WrapRoot = ({ element }) => (<AuthProvider>
  {element}
</AuthProvider>);