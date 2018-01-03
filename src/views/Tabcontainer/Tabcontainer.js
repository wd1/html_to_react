import React, {Component} from 'react';
import {Badge, Row, Col, Table,  Modal, ModalHeader, ModalBody, ModalFooter,  Pagination, PaginationItem,PaginationLink,TabContent, Card, CardHeader, CardBody, TabPane, Nav, NavItem, NavLink, Button, Label, Input} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';

class Tabcontainer extends Component {

  constructor(props,context) {
    super(props);
    console.log("Iframe window and document", context.head,context.window, context.document);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      primary: false,
      isOpen: false
    };
    this.togglePrimary = this.togglePrimary.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  
  openModal () {
    this.setState({isOpen: true})
  }
  togglePrimary() {
    this.setState({
      primary: !this.state.primary
    });
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={this.togglePrimary}>Info</ModalHeader>
          <ModalBody>
            Select your new eyeglass lenses and options and complete your order online.
            Our ABO Certified Opticians are here to help throughout the process.
            Use a new, valid prescription or we can copy the prescription that is currently in the lenses or from any pair of glasses you send us.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.togglePrimary}>OK</Button>{' '}
          </ModalFooter>
        </Modal>
        <CardHeader style={{marginTop:'10px',marginBottom:'10px'}}>Instructions: <span style={{color:'grey'}}>Answer the following questions to get the perfect lens & frame</span><span className="float-right d-md-down-none">Step <span className=" badge badge-danger badge-pill" style={{backgroundColor:'#20a8d8'}}>1</span> of <span className=" badge badge-danger badge-pill"  style={{backgroundColor:'#20a8d8'}}>6</span></span></CardHeader>
        <Row>
          <Col xs="12" md="12" className="mb-12">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                 
                >
                  <i className="icon-direction"></i> <span className={ this.state.activeTab === '1' ? "" : "d-none"}> Part 1</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  
                >
                  <i className="icon-direction"></i> <span
                  className={ this.state.activeTab === '2' ? "" : "d-none"}> Part 2</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  
                >
                  <i className="icon-direction"></i> <span className={ this.state.activeTab === '3' ? "" : "d-none"}> Part 3</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
               
                >
                  <i className="icon-direction"></i> <span className={ this.state.activeTab === '4' ? "" : "d-none"}> Part 4</span>
                </NavLink>
              </NavItem><NavItem>
              <NavLink
                  className={classnames({ active: this.state.activeTab === '5' })}
              
                >
                  <i className="icon-eye"></i> <span className={ this.state.activeTab === '5' ? "" : "d-none"}> Select Lens Options</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '6' })}
          
                >
                  <i className="icon-magic-wand"></i> <span className={ this.state.activeTab === '6' ? "" : "d-none"}> Rx & Measurements</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col xs="12" sm="8" md="8">
                    <Card className="card-accent-secondary">
                      
                      <CardBody>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black', fontSize:'1rem'}}>Category '1' Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}} onClick={this.togglePrimary}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1. More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.a)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.a)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.a)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={this.togglePrimary}><i className="icon-link"></i>&nbsp;<span>Cat1 a) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.b)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.b)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.b)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={this.togglePrimary}><i className="icon-link"></i>&nbsp;<span>Cat1 b) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        <Table responsive  style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black',fontSize:'1rem'}}>Category Selected '1.a.b.c' Sub-Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}} onClick={this.togglePrimary}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1.a.b.c More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.abc-1)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.abc-1)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.abc)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={this.togglePrimary}><i className="icon-link"></i>&nbsp;<span>Cat1 abc) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8', border: 'none',background:'none'}}  onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}}  onClick={() => { this.toggle('2'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    <Table responsive  style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src="../img/demo_glass.jpeg" style={{width: '100%'}}/>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <p href="#" onClick={this.openModal} style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <div>
                              <h6>Running Total <span style={{color: 'grey', float:'right'}}>$$$/pr</span></h6>
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                              <h6>Sub-Cat 1.abc-1)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <div style={{textAlign:'right', color:'grey'}}>
                              <h5><i className="icon-settings" style={{fontSize:'17px'}}></i>{'\u00A0'}Settings</h5>
                              <h6>Use Extra Large Fonts:{'\u00A0'}
                                <Label className="switch switch-icon switch-pill switch-info">
                                  <Input type="checkbox" className="switch-input"/>
                                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                                  <span className="switch-handle"></span>
                                </Label>
                              </h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col xs="12" sm="8" md="8">
                    <Card className="card-accent-secondary">
                      
                      <CardBody>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black', fontSize:'1rem'}}>Category '1' Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1. More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.a)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.a)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.a)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 a) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.b)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.b)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.b)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 b) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black',fontSize:'1rem'}}>Category Selected '1.a.b.c' Sub-Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1.a.b.c More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.abc-1)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.abc-1)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.abc)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 abc) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}}  onClick={() => { this.toggle('1'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}}  onClick={() => { this.toggle('3'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    <Table responsive style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src="../img/demo_glass.jpeg" style={{width: '100%'}}/>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <p href="#" style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <div>
                              <h6>Running Total <span style={{color: 'grey', float:'right'}}>$$$/pr</span></h6>
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                              <h6>Sub-Cat 1.abc-1)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col xs="12" sm="8" md="8">
                    <Card className="card-accent-secondary">
                      
                      <CardBody>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black', fontSize:'1rem'}}>Category '1' Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1. More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.a)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.a)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.a)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 a) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.b)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.b)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.b)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 b) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black',fontSize:'1rem'}}>Category Selected '1.a.b.c' Sub-Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1.a.b.c More Info Link</span></span></p>
                              
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.abc-1)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.abc-1)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.abc)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 abc) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('2'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}} onClick={() => { this.toggle('4'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    <Table responsive style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src="../img/demo_glass.jpeg" style={{width: '100%'}}/>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <p href="#" style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <div>
                              <h6>Running Total <span style={{color: 'grey', float:'right'}}>$$$/pr</span></h6>
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                              <h6>Sub-Cat 1.abc-1)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col xs="12" sm="8" md="8">
                    <Card className="card-accent-secondary">
                      
                      <CardBody>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black', fontSize:'1rem'}}>Category '1' Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1. More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.a)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.a)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.a)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 a) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.b)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.b)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.b)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 b) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black',fontSize:'1rem'}}>Category Selected '1.a.b.c' Sub-Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1.a.b.c More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.abc-1)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.abc-1)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.abc)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 abc) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('3'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}} onClick={() => { this.toggle('5'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    <Table responsive style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src="../img/demo_glass.jpeg" style={{width: '100%'}}/>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <p href="#" style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <div>
                              <h6>Running Total <span style={{color: 'grey', float:'right'}}>$$$/pr</span></h6>
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                              <h6>Sub-Cat 1.abc-1)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="5">
                <Row>
                  <Col xs="12" sm="8" md="8">
                    <Card className="card-accent-secondary">
                      
                      <CardBody>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black', fontSize:'1rem'}}>Category '1' Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1. More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.a)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.a)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.a)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 a) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.b)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.b)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.b)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 b) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black',fontSize:'1rem'}}>Category Selected '1.a.b.c' Sub-Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1.a.b.c More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.abc-1)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.abc-1)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.abc)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 abc) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('4'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}} onClick={() => { this.toggle('6'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    <Table responsive style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src="../img/demo_glass.jpeg" style={{width: '100%'}}/>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <p href="#" style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <div>
                              <h6>Running Total <span style={{color: 'grey', float:'right'}}>$$$/pr</span></h6>
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                              <h6>Sub-Cat 1.abc-1)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="6">
                <Row>
                  <Col xs="12" sm="8" md="8">
                    <Card className="card-accent-secondary">
                      
                      <CardBody>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black', fontSize:'1rem'}}>Category '1' Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1. More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.a)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.a)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.a)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 a) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.b)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.b)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.b)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 b) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        <Table responsive style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black',fontSize:'1rem'}}>Category Selected '1.a.b.c' Sub-Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1.a.b.c More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Sub-cat1.abc-1)<span style={{color:'grey'}}>Name</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}>Add $ 1.abc-1)</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >Cat 1.abc)<span style={{color:'grey'}}>Description</span></p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-link"></i>&nbsp;<span>Cat1 abc) Link</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src="../img/here-placer.jpg" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('5'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8', border: 'none',background:'none'}}  onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    <Table responsive style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src="../img/demo_glass.jpeg" style={{width: '100%'}}/>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <p href="#" style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <div>
                              <h6>Running Total <span style={{color: 'grey', float:'right'}}>$$$/pr</span></h6>
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                              <h6>Sub-Cat 1.abc-1)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
        
      </div>
    )
  }
}
Tabcontainer.contextTypes = {
  head: PropTypes.node,
  window: PropTypes.any,
  document: PropTypes.any
};
export default Tabcontainer;
