import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import styles from './Layout.module.css';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();

  return (
    <>
      <header>
        <Nav />
      </header>

      <main className={styles.main}>
        {pathname === '/' ? <>{children}</> : <Outlet />}
      </main>
    </>
  );
}
