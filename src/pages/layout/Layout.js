import React from 'react';
import { Helmet } from 'react-helmet';
import SidebarMenu from './SidebarMenu';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Icon.scss';
import './Layout.scss';

const Layout = ({ children, pageContext }) => {

  const menu = {
    categories: [
      {
        title: 'Category', items: [
          { key: 'home', title: 'Main Page', icon: 'icon-home', move: '/' },
          { key: 'login', title: 'Login', icon: 'icon-user-plus', move: 'login' },
          { key: 'personal', title: 'Personal Page', icon: 'icon-user', move: 'personal' },
        ],
      },
    ],
  };

  return <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>My Website</title>
    </Helmet>
    <div className='layoutMain'>
      <div className='sideBar'>
        <SidebarMenu menu={menu} page={pageContext.page}/>
      </div>
      <div className='mainContainer'>
        {children}
      </div>
    </div>
  </>;
};

export default Layout;