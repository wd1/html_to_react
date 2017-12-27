import React, {Component} from 'react';
import {Badge, Row, Col, Table,   Pagination, PaginationItem,PaginationLink,TabContent, Card, CardHeader, CardBody, TabPane, Nav, NavItem, NavLink, Button} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Tabcontainer extends Component {

  constructor(props,context) {
    super(props);
    console.log("Iframe window and document", context.head,context.window, context.document);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
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
        <CardHeader style={{marginTop:'10px'}}>Instruction<span className="float-right">Step <span className=" badge badge-danger badge-pill">1</span> of <span className=" badge badge-danger badge-pill">6</span></span></CardHeader>
        <Row>
          <Col xs="12" md="12" className="mb-12">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  <i className="icon-calculator"></i> <span className={ this.state.activeTab === '1' ? "" : "d-none"}> Category '1'</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  <i className="icon-basket-loaded"></i> <span
                  className={ this.state.activeTab === '2' ? "" : "d-none"}> Category'2'</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  <i className="icon-pie-chart"></i> <span className={ this.state.activeTab === '3' ? "" : "d-none"}> Category '3'</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                  <i className="icon-calculator"></i> <span className={ this.state.activeTab === '4' ? "" : "d-none"}> Category '4'</span>
                </NavLink>
              </NavItem><NavItem>
              <NavLink
                  className={classnames({ active: this.state.activeTab === '5' })}
                  onClick={() => { this.toggle('5'); }}
                >
                  <i className="icon-basket-loaded"></i> <span className={ this.state.activeTab === '5' ? "" : "d-none"}> Category '5'</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '6' })}
                  onClick={() => { this.toggle('6'); }}
                >
                  <i className="icon-pie-chart"></i> <span className={ this.state.activeTab === '6' ? "" : "d-none"}> Category '6'</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col xs="12" sm="8" md="8">
                    <Card className="card-accent-secondary">
                      
                      <CardBody>
                        <Table responsive>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h3>Category '1' Description</h3>
                              <p style={{color:'red'}}><span style={{color:'blue'}}>Cat 1.</span> More Info <span style={{color:'blue'}}>Link</span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>
                              <p >Sub-cat1.a)<span style={{color:'red'}}>Name</span></p>
                              <p style={{color:'green'}}>Add $ 1.a)</p>
                            </td>
                            <td>
                              <p >Cat 1.a)<span style={{color:'red'}}>Description</span></p>
                              <p style={{color:'blue'}}>Cat1.a)<span style={{color:'red'}}>Link</span></p>
                            </td>
                            <td>
                              <img src="//cdn3.volusion.com/zrdfe.utzda/v/vspfiles/photos/categories/1830-T.jpg?1390588824" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p >Sub-cat1.b)<span style={{color:'red'}}>Name</span></p>
                              <p style={{color:'green'}}>Add $ 1.b)</p>
                            </td>
                            <td>
                              <p >Cat 1.b)<span style={{color:'red'}}>Description</span></p>
                              <p style={{color:'blue'}}>Cat1.b)<span style={{color:'red'}}>Link</span></p>
                            </td>
                            <td>
                              <img src="//cdn3.volusion.com/zrdfe.utzda/v/vspfiles/photos/categories/1830-T.jpg?1390588824" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        <Table responsive>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h3>Category Selected '1.a.b.c' Sub-Description</h3>
                              <p style={{color:'red'}}><span style={{color:'blue'}}>Cat 1.a.b.c</span> More Info <span style={{color:'blue'}}>Link</span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>
                              <p >Sub-cat1.abc-1)<span style={{color:'red'}}>Name</span></p>
                              <p style={{color:'green'}}>Add $ 1.abc-1)</p>
                            </td>
                            <td>
                              <p >Cat 1.abc)<span style={{color:'red'}}>Description</span></p>
                              <p style={{color:'blue'}}>Cat1.abc)<span style={{color:'red'}}>Link</span></p>
                            </td>
                            <td>
                              <img src="//cdn3.volusion.com/zrdfe.utzda/v/vspfiles/photos/categories/1830-T.jpg?1390588824" style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button color="primary" style={{float:'left'}}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button style={{border: 'none',background:'none'}}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button color="primary" style={{float:'right'}}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    <Table responsive>
                      <thead>
                        <tr>
                          <td>
                            <img src="//cdn3.volusion.com/zrdfe.utzda/v/vspfiles/photos/categories/1830-T.jpg?1390588824" style={{width: '100%'}}/>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#"><i className="fa fa-video-camera fa-lg mt-4"></i> &nbsp;Watch Video</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <h3>RUNNING TOTAL <span style={{color: 'red', float:'right'}}>$$$/pr</span></h3>
                              <h5>Sub-Cat 1.a)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                              <h5>Sub-Cat 1.abc-1)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
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
                  <Col xs="12" md="8" className="mb-8">
                    <div style={{textAlign:'center'}}>
                      <h3>Category '1' Description</h3>
                      <p style={{color:'red'}}><span style={{color:'blue'}}>Cat 1.</span> More Info <span style={{color:'blue'}}>Link</span></p>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </Col>
                  <Col xs="12" md="4" className="mb-4">
                    <div>
                      <img src="//cdn3.volusion.com/zrdfe.utzda/v/vspfiles/photos/categories/1830-T.jpg?1390588824" style={{width: '100%'}}/>
                    </div>
                    <h4>Current Category Video URL</h4>
                    <div>
                      <h3>RUNNING TOTAL <span>$$$/pr</span></h3>
                      <h5>Sub-Cat 1.a)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                      <h5>Sub-Cat 1.abc-1)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                    </div>
                    <div>
                      <p style={{textAlign: 'center'}}>Continue listing selections throughout the process with totals for each STEP broken down</p>
                    </div>
                  </Col>
                </Row>
                <CardBody>
                  <Button color="primary"><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                </CardBody>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col xs="12" md="8" className="mb-8">
                    <div style={{textAlign:'center'}}>
                      <h3>Category '1' Description</h3>
                      <p style={{color:'red'}}><span style={{color:'blue'}}>Cat 1.</span> More Info <span style={{color:'blue'}}>Link</span></p>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </Col>
                  <Col xs="12" md="4" className="mb-4">
                    <div>
                      <img src="//cdn3.volusion.com/zrdfe.utzda/v/vspfiles/photos/categories/1830-T.jpg?1390588824" style={{width: '100%'}}/>
                    </div>
                    <h4>Current Category Video URL</h4>
                    <div>
                      <h3>RUNNING TOTAL <span>$$$/pr</span></h3>
                      <h5>Sub-Cat 1.a)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                      <h5>Sub-Cat 1.abc-1)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                    </div>
                    <div>
                      <p style={{textAlign: 'center'}}>Continue listing selections throughout the process with totals for each STEP broken down</p>
                    </div>
                  </Col>
                </Row>
                <CardBody>
                  <Button color="primary"><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                </CardBody>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col xs="12" md="8" className="mb-8">
                    <div style={{textAlign:'center'}}>
                      <h3>Category '1' Description</h3>
                      <p style={{color:'red'}}><span style={{color:'blue'}}>Cat 1.</span> More Info <span style={{color:'blue'}}>Link</span></p>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </Col>
                  <Col xs="12" md="4" className="mb-4">
                    <div>
                      <img src="//cdn3.volusion.com/zrdfe.utzda/v/vspfiles/photos/categories/1830-T.jpg?1390588824" style={{width: '100%'}}/>
                    </div>
                    <h4>Current Category Video URL</h4>
                    <div>
                      <h3>RUNNING TOTAL <span>$$$/pr</span></h3>
                      <h5>Sub-Cat 1.a)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                      <h5>Sub-Cat 1.abc-1)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                    </div>
                    <div>
                      <p style={{textAlign: 'center'}}>Continue listing selections throughout the process with totals for each STEP broken down</p>
                    </div>
                  </Col>
                </Row>
                <CardBody>
                  <Button color="primary"><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                </CardBody>
              </TabPane>
              <TabPane tabId="5">
                <Row>
                  <Col xs="12" md="8" className="mb-8">
                    <div style={{textAlign:'center'}}>
                      <h3>Category '1' Description</h3>
                      <p style={{color:'red'}}><span style={{color:'blue'}}>Cat 1.</span> More Info <span style={{color:'blue'}}>Link</span></p>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </Col>
                  <Col xs="12" md="4" className="mb-4">
                    <div>
                      <img src="//cdn3.volusion.com/zrdfe.utzda/v/vspfiles/photos/categories/1830-T.jpg?1390588824" style={{width: '100%'}}/>
                    </div>
                    <h4>Current Category Video URL</h4>
                    <div>
                      <h3>RUNNING TOTAL <span>$$$/pr</span></h3>
                      <h5>Sub-Cat 1.a)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                      <h5>Sub-Cat 1.abc-1)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                    </div>
                    <div>
                      <p style={{textAlign: 'center'}}>Continue listing selections throughout the process with totals for each STEP broken down</p>
                    </div>
                  </Col>
                </Row>
                <CardBody>
                  <Button color="primary"><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                </CardBody>
              </TabPane>
              <TabPane tabId="6">
                <Row>
                  <Col xs="12" md="8" className="mb-8">
                    <div style={{textAlign:'center'}}>
                      <h3>Category '1' Description</h3>
                      <p style={{color:'red'}}><span style={{color:'blue'}}>Cat 1.</span> More Info <span style={{color:'blue'}}>Link</span></p>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    <div>
                      <h6>Subcategroy part</h6>
                    </div>
                    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </Col>
                  <Col xs="12" md="4" className="mb-4">
                    <div>
                      <img src="//cdn3.volusion.com/zrdfe.utzda/v/vspfiles/photos/categories/1830-T.jpg?1390588824" style={{width: '100%'}}/>
                    </div>
                    <h4>Current Category Video URL</h4>
                    <div>
                      <h3>RUNNING TOTAL <span>$$$/pr</span></h3>
                      <h5>Sub-Cat 1.a)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                      <h5>Sub-Cat 1.abc-1)<span style={{color: 'red'}}>Name</span><span style={{color: 'red', float:'right'}}>$/pr</span></h5>
                    </div>
                    <div>
                      <p style={{textAlign: 'center'}}>Continue listing selections throughout the process with totals for each STEP broken down</p>
                    </div>
                  </Col>
                </Row>
                <CardBody>
                  <Button color="primary"><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                </CardBody>
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
