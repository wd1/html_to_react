import React, {Component} from 'react';
import {Badge, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Button} from 'reactstrap';
import classnames from 'classnames';
import Frame from 'react-frame-component'
import Tabcontainer from '../../views/Tabcontainer/';

class Framecontainer extends Component {

  constructor(props) {
    super(props);
    
  }
  
  render() {
    const initialContent = `<!DOCTYPE html><html><head>${document.head.innerHTML}</head><body><div></div></body></html>`;
    return (
      <Frame initialContent={initialContent} style={{width:'100%', height:'600px', border:'none'}}>
        <Tabcontainer/>
      </Frame>
    )
  }
}

export default Framecontainer;
