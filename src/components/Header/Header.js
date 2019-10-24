import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import Paginations from '../Paginations/Paginations';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const MyHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{position:"fixed", top: "0",zIndex:"100", width:"100%"}}>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><FontAwesomeIcon icon="film" /> Movie Finder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        {/* <SearchBar/> */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Profile</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Discover
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Upcoming
                </DropdownItem>
                <DropdownItem>
                  Now Playing
                </DropdownItem>
                <DropdownItem>
                  Top Rated
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyHeader;