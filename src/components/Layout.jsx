import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
    <main className='max-w-7xl mx-auto sm:px-10 px-5'>
    <Header/>
      {children}
    </main>
    </>
  );
}

export default Layout;