import React, { ReactNode } from 'react';
import styles from './layout.module.scss';
import Header from 'organisms/header/header';
import Footer from 'organisms/footer/footer';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
