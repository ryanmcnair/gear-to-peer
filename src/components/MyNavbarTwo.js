import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function MyNavbar(props) {
  const history = useHistory();
  const logMeOut = (e) => {
    e.preventDefault();
    history.push('/');
    firebase.auth().signOut();
  };
  const { user } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return user && (
    <div>
      <Navbar color='dark' dark expand='md' className='justify-content-between'>
        <Link className='navbar-brand' to='/'>
          Gear To Peer
          </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='flex-grow-1' navbar>
            <NavItem>
            {user && (
              <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/collection'>
                    Collection
                </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/tour'>
                    Tour
                </Link>
                </li>
              </ul>
            )}
            </NavItem>
          </Nav>
          {user && (
            <>
              <img
                className='userInfo rounded'
                src={user?.photoURL}
                alt={user?.displayName}
              />
              <UncontrolledDropdown>
                <DropdownToggle nav caret></DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>{user?.displayName}</DropdownItem>
                  <DropdownItem>
                    <div
                      className='nav-link btn btn-danger'
                      onClick={(e) => logMeOut(e)}
                    >
                      Logout
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}
