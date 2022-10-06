import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/home'>
            HOME
          </Link>
          <Link className='nav-link' to='/about'>
            ABOUT
          </Link>
          <Link className='nav-link' to='/contacts'>
            CONTACTS
          </Link>
        </div>
      </div>
      <div className='main'>
        <Outlet />
      </div>
      <footer>This is an example project for practicing React routing.</footer>
    </Fragment>
  );
};

export default Navigation;
