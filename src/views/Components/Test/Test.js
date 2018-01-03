import React, {Component} from 'react';
import {Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody} from 'reactstrap';
import Frame from 'react-frame-component'
import Tabcontainer from '../../Tabcontainer/';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: false
    };

    this.toggleInfo = this.toggleInfo.bind(this);
  }


  toggleInfo() {
    this.setState({
      info: !this.state.info
    });
  }

  render() {
    const initialContent = `<!DOCTYPE html><html><head>${document.head.innerHTML}</head><body><div></div></body></html>`;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>   
              <CardBody>
                <Button color="info" onClick={this.toggleInfo}>Test Iframe</Button>
                <Modal isOpen={this.state.info} toggle={this.toggleInfo}
                       className={'modal-info ' + this.props.className}>
                  <ModalHeader toggle={this.toggleInfo}>Modal title</ModalHeader>
                  <ModalBody>
                    <Frame initialContent={initialContent} style={{width:'100%', height:'600px', border:'none'}}>
                      <Tabcontainer/>
                    </Frame>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleInfo}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleInfo}>Cancel</Button>
                  </ModalFooter>
                </Modal>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Test;
