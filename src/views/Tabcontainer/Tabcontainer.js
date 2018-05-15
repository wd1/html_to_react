import React, {Component} from 'react';
import {Badge, Row, Col, Table,  Modal, ModalHeader, ModalBody, ModalFooter,  Pagination, PaginationItem,PaginationLink,TabContent, Card, CardHeader, CardBody, TabPane, Nav, NavItem, NavLink, Button, Label, Input} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// const API = 'https://192.168.0.59:8080/getdata.php';
// const API ='getdata.php';
const API='https://hn.algolia.com/api/v1/search?query=redux';
class Tabcontainer extends Component {

  constructor(props,context) {
    super(props);
    console.log("Iframe window and document", context.head,context.window, context.document);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      primary: false,
      description: false,
      isOpen: false,
      selectedIndex: -1,
      description_index: -1,
      frameData: [{"id":"1","name":"Full Rimmed Frame","desc_short":"Frame with a Rim encircling the entire lens.","desc_long":"Full-Rimmed frames are the most common frame type, with a rim encircling each lens entirely. We can make lenses for 99% of full-rimmed frames.","inc_cost":"0","image_url":"\/\/cdn3.volusion.com\/zrdfe.utzda\/v\/vspfiles\/photos\/categories\/1817-T.jpg"},{"id":"2","name":"Semi-Rimless Frame","desc_short":"Partially rimmed frame with a grooved lens.","desc_long":"Semi-Rimless frames have a groove around the lens' rim, and are secured to the frame with a thin cord. They usually have a rim on the top of the frame, but sometimes are rimless on the sides of the frame instead. We can make lenses for 99% of Semi-Rimless frames. We do not recommend lenses in the standard plastic material for this frame type because there is an increased risk of chipping.","inc_cost":"15","image_url":"\/\/cdn3.volusion.com\/zrdfe.utzda\/v\/vspfiles\/photos\/categories\/1830-T.jpg"},{"id":"3","name":"Drilled Rimless Frame","desc_short":"No frame rim with drill holes through the lenses.","desc_long":"Drilled-Rimless frames don't have a rim and are secured with drill holes through the lenses. We recommend the Trivex lens material for all Rx's below +\/- 3.00 diopters for maximum durability. FREE lens polish!","inc_cost":"45","image_url":"\/\/cdn3.volusion.com\/zrdfe.utzda\/v\/vspfiles\/photos\/categories\/1843-T.jpg"},{"id":"4","name":"High Wrap Frame","desc_short":"High curvature frame that wraps.","desc_long":"High wrap frames wrap around the face to restrict unwanted light. We make lenses for most high wrap frames, but the allowable prescription range is limited. We do not recommend high wrap frames for Rx's stronger than +\/- 2.00 diopters combined power. ","inc_cost":"40","image_url":"\/\/cdn3.volusion.com\/zrdfe.utzda\/v\/vspfiles\/photos\/categories\/1846-T.jpg"}],
    };
    this.success = this.success.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  
  componentDidMount() {
    fetch(API)
        .then(response => {return response.json()})
        .then(data => {
          // let frames = data.hits.map((frame) => {
          //   return(
          //     <div key={frame.created_at}>
          //       {frame.title}
          //     </div>
          //   )
          // })
          // this.setState({frameData: data});
          console.log("state", this.state.frameData);
        });
  }
  success() {
    // add type: 'success' to options
    return toast.success('Progress Saved...');
  }

  openModal () {
    this.setState({isOpen: true})
  }
  togglePrimary() {
    this.setState({
      primary: !this.state.primary
    });
  }
  toggleDescription() {
    this.setState({
      description: !this.state.description,
    });

  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  setselectedIndex(index) {
    console.log(index);
    if (this.state.selectedIndex !== index) {
      this.setState({
        selectedIndex: index
      });
    }
  }
  render() {
    const containerStyle = {
      zIndex: 1999
    };
    const { frameData } = this.state;
    // console.log(frameData)
    // console.log(frames);
    return (
      <div className="animated fadeIn">
        {/* { frameData.length &&
        <div>
          {frameData[0].title}
        </div>
        } */}
        <ToastContainer position="top-right" autoClose={3000} style={containerStyle}/>
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
        <Modal isOpen={this.state.description} onClick={this.toggleDescription}
                className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={this.toggleDescription}>Info</ModalHeader>
          <ModalBody>
            {  (this.state.selectedIndex>-1) &&
              frameData[this.state.selectedIndex].desc_long
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleDescription}>OK</Button>{' '}
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
                  <i className="icon-direction"></i> <span className={ this.state.activeTab === '1' ? "" : "d-none"}> Frame</span>
                </NavLink>
              </NavItem>
              {/* <NavItem>
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
              </NavItem> */}
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
                              <h4 style={{color:'black', fontSize:'1rem'}}>Step 1: Choose frame type you are sending in:</h4>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}} onClick={this.togglePrimary}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>More Info</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          {
                            frameData.map((frame, i) =>
                            <tr key={i} onClick={() => { this.setselectedIndex(i); }}>
                              <td style={{verticalAlign:'middle'}}>
                                <p >{frameData[i].name}{/* <span style={{color:'grey'}}>Name</span> */}</p>
                                <p style={{color:'grey', marginBottom:'0px'}}>${frameData[i].inc_cost}</p>
                              </td>
                              <td style={{verticalAlign:'middle'}}>
                                <p >{frameData[i].desc_short}{ /*<span style={{color:'grey'}}>Description</span> */}</p>
                                <p style={{color:'grey', marginBottom:'0px'}} data-toggle="tooltip" title="Detailed Description"><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={() => { this.toggleDescription(); }}><i className="icon-link"></i>&nbsp;<span>Description</span></span></p>
                              </td>
                              <td style={{width:'100px'}}>
                                <img src={frameData[i].image_url} style={{width: '100%'}}/>
                              </td>  
                            </tr>)
                          }
                          </tbody>
                        </Table>
                        { this.state.selectedIndex>-1 &&
                        <Table responsive  style={{marginBottom:'0px'}}>
                          <thead>
                          <tr>
                            <th colSpan='3' style={{textAlign:'center'}}>
                              <h5 style={{color:'black',fontSize:'1rem'}}>Category Selected '1.a.b.c' Sub-Description</h5>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}} onClick={this.togglePrimary}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>More Info</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td style={{verticalAlign:'middle'}}>
                              <p >{frameData[this.state.selectedIndex].name}</p>
                              <p style={{color:'grey', marginBottom:'0px'}}>${frameData[this.state.selectedIndex].inc_cost}</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >{frameData[this.state.selectedIndex].desc_short}</p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={() => {this.toggleDescription();}}><i className="icon-link"></i>&nbsp;<span>Description</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src={frameData[this.state.selectedIndex].image_url} style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        }
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8', border: 'none',background:'none'}}  onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}}  onClick={() => { this.success();this.toggle('2');  }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                    { this.state.selectedIndex>-1 &&
                    <Table responsive  style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src={frameData[this.state.selectedIndex].image_url} style={{width: '100%'}}/>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <p href="#" onClick={this.openModal} style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>
                            <ModalVideo style={{width:'50%'}} channel='vimeo' isOpen={this.state.isOpen} videoId='64879570' onClose={() => this.setState({isOpen: false})} />
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <div>
                              <h6>Running Total <span style={{color: 'grey', float:'right'}}>$$$/pr</span></h6>
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>{frameData[this.state.selectedIndex].name}</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
                              {/* <h6>Sub-Cat 1.abc-1)<span style={{color: 'grey'}}>Name</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6> */}
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
                    }
                  </Col>
                </Row>
                
              </TabPane>
              {/* <TabPane tabId="2">
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
                        <Table responsive style={{marginBottom:'0px'}}>
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
                      <Button className='col-md-2' color="primary" style={{float:'left'}}  onClick={() => { this.toggle('1'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}}  onClick={() => {this.success(); this.toggle('3'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
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
                            <p href="#" onClick={this.openModal} style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>                             <ModalVideo style={{width:'50%'}} channel='vimeo' isOpen={this.state.isOpen} videoId='64879570' onClose={() => this.setState({isOpen: false})} />
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
                        <Table responsive style={{marginBottom:'0px'}}>
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
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('2'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}} onClick={() => {this.success(); this.toggle('4'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
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
                            <p href="#" onClick={this.openModal} style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>                             <ModalVideo style={{width:'50%'}} channel='vimeo' isOpen={this.state.isOpen} videoId='64879570' onClose={() => this.setState({isOpen: false})} />
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
                        <Table responsive style={{marginBottom:'0px'}}>
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
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('3'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}} onClick={() => {this.success(); this.toggle('5'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
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
                            <p href="#" onClick={this.openModal} style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>                             <ModalVideo style={{width:'50%'}} channel='vimeo' isOpen={this.state.isOpen} videoId='64879570' onClose={() => this.setState({isOpen: false})} />
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
                        <Table responsive style={{marginBottom:'0px'}}>
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
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('4'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}} onClick={() => {this.success(); this.toggle('6'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
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
                            <p href="#" onClick={this.openModal} style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>                             <ModalVideo style={{width:'50%'}} channel='vimeo' isOpen={this.state.isOpen} videoId='64879570' onClose={() => this.setState({isOpen: false})} />
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
                        <Table responsive style={{marginBottom:'0px'}}>
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
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('5'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8', border: 'none',background:'none'}}  onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}} onClick={() => {this.success();}}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
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
                            <p href="#" onClick={this.openModal} style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}}><i className="icon-control-play icons"></i> &nbsp;Watch Video</p>                             <ModalVideo style={{width:'50%'}} channel='vimeo' isOpen={this.state.isOpen} videoId='64879570' onClose={() => this.setState({isOpen: false})} />
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
              </TabPane> */}
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
