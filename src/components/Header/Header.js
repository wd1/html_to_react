import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar" style={{position:'relative !important', background:'white', border:'none'}}>
        <NavbarBrand style={{display:'flex',background:'none',border:'none',left:'0',marginLeft:'0'}} href="#">
          <img src="../img/lens-selector-logo.png" style={{height:'30px',alignSelf: 'center'}}/>
        </NavbarBrand>
        <Nav className="ml-auto" style={{padding:'0 1.75rem'}} navbar>
          <HeaderDropdown tasks />
        </Nav>
      </header>
    );
  }
}

export default Header;
