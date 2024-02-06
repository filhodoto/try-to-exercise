import React from 'react';
import './styles.css';
import { Link, Outlet } from 'react-router-dom';

/* This component contains the elements/layout that should be shown across the application. For example the header */
const NavBar = (): JSX.Element => {
  return (
    <>
      <header>
        <nav className="container">
          <Link to="/">
            <h1>Try To Exercise</h1>
          </Link>
        </nav>
      </header>
      {/*  This is the place were all the pages will be rendered. We tell the application where the render the "pages" information
      by setting an Outlet inside of the main component/layout, which is this one */}
      <div className="pages">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
