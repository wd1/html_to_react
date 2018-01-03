import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer" style={{marginLeft:'0px',marginTop:'30px'}}>
        <span><a href="#">Lens Selector</a> &copy; 2018</span>
        <span className="ml-auto">Powered by <a target="_blank" href="https://replacealens.com">ReplaceALens</a></span>
      </footer>
    )
  }
}

export default Footer;
