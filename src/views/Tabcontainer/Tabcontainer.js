import React, {Component} from 'react';
import {Badge, Row, Col, Table,  Modal, ModalHeader, ModalBody, ModalFooter,  Pagination, PaginationItem,PaginationLink,TabContent, Card, CardHeader, CardBody, TabPane, Nav, NavItem, NavLink, Button, Label, Input} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// const API = 'https://192.168.0.59:8080/getdata.php';
// const API ='getdata.php';
const API=[]; 
API[0]=('http://149.56.15.245/getdata.php?type=frame_type');
API[1]='http://149.56.15.245/getdata.php?type=lens_type';
API[2]='http://149.56.15.245/getdata.php?type=lens_material';
API[3]='http://149.56.15.245/getdata.php?type=specialty_lens_type';

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
      lensselectedIndex: -1,
      lensmaterialselectedIndex: -1,
      lensspecialselectedIndex: -1,
      description_index: -1,
      frameData: [{"id":"1","name":"Full Rimmed Frame","desc_short":"Frame with a Rim encircling the entire lens.","desc_long":"Full-Rimmed frames are the most common frame type, with a rim encircling each lens entirely. We can make lenses for 99% of full-rimmed frames.","inc_cost":"0","image_url":"\/\/cdn3.volusion.com\/zrdfe.utzda\/v\/vspfiles\/photos\/categories\/1817-T.jpg"},{"id":"2","name":"Semi-Rimless Frame","desc_short":"Partially rimmed frame with a grooved lens.","desc_long":"Semi-Rimless frames have a groove around the lens' rim, and are secured to the frame with a thin cord. They usually have a rim on the top of the frame, but sometimes are rimless on the sides of the frame instead. We can make lenses for 99% of Semi-Rimless frames. We do not recommend lenses in the standard plastic material for this frame type because there is an increased risk of chipping.","inc_cost":"15","image_url":"\/\/cdn3.volusion.com\/zrdfe.utzda\/v\/vspfiles\/photos\/categories\/1830-T.jpg"},{"id":"3","name":"Drilled Rimless Frame","desc_short":"No frame rim with drill holes through the lenses.","desc_long":"Drilled-Rimless frames don't have a rim and are secured with drill holes through the lenses. We recommend the Trivex lens material for all Rx's below +\/- 3.00 diopters for maximum durability. FREE lens polish!","inc_cost":"45","image_url":"\/\/cdn3.volusion.com\/zrdfe.utzda\/v\/vspfiles\/photos\/categories\/1843-T.jpg"},{"id":"4","name":"High Wrap Frame","desc_short":"High curvature frame that wraps.","desc_long":"High wrap frames wrap around the face to restrict unwanted light. We make lenses for most high wrap frames, but the allowable prescription range is limited. We do not recommend high wrap frames for Rx's stronger than +\/- 2.00 diopters combined power. ","inc_cost":"40","image_url":"\/\/cdn3.volusion.com\/zrdfe.utzda\/v\/vspfiles\/photos\/categories\/1846-T.jpg"}],
      lensData: [{"id":"1","name":"Single Vision","desc_short":"One prescription power throughout entire lens. ","desc_long":"Single vision lenses correct for one focal length, usually for distance, intermediate, or reading.","inc_cost":"39"},{"id":"2","name":"Lined Bifocal","desc_short":"Distance power on top and a D-Shaped segment for reading.","desc_long":"Lined bifocal lenses correct for two focal lengths, one on top, usually for distance, and a D-shaped bottom segment for reading. Choose from standard 28 millimeter or larger 35 millimeter bifocal segment widths.","inc_cost":"49"},{"id":"3","name":"Lined Trifocal","desc_short":"Distance power on top, with a D-Shaped segment containing intermediate and reading powers. ","desc_long":"Lined trifocal lenses correct for three focal lengths, one on top, usually for distance, and a D-shaped bottom segment that contains both intermediate and reading. Choose from standard 28mm or wider 35mm segments.","inc_cost":"69"},{"id":"4","name":"Progressive (no-line)","desc_short":"Distance power on top, with a gradually increasing power down the lens for intermediate and reading viewing. ","desc_long":"Progressive (no-line) lenses correct for distance, intermediate, and reading. Also referred to as 'no-line bifocal' and 'no-line trifocals,' progressive lenses look like single vision lenses, with a corridor of increasing power as you travel down the lens. We offer both Traditional and Digital (High-Definition) progressive lenses.","inc_cost":"59"},{"id":"5","name":"Non Prescription","desc_short":"Lenses without a prescription. ","desc_long":"Non-prescription lenses do not contain a prescription correction. They are traditionally used as sunglass lenses or for custom cosmetic or safety applications.","inc_cost":"39"}],
      lensMaterialData: [{"id":"1","name":"Plastic\r\n","desc_short":"Standard lens material. Great for low prescriptions. ","desc_long":"The Plastic CR-39 (1.49 index) lens material is a great choice for lower prescriptions and full-rimmed frame applications. Plastic lenses have excellent optical clarity and are available in virtually all lens types. The Plastic CR-39 material cannot be used with rimless style frames.","inc_cost":"39"},{"id":"2","name":"Polycarbonate","desc_short":"Thinner and lighter material with full UV protection and increased shatter resistance. ","desc_long":"The Polycarbonate (1.59 index) lens material is a great choice for mid-range prescriptions. Polycarbonate lenses are thinner and lighter than standard plastic, have increased impact resistance and 100% UV protection. The high impact resistance makes polycarbonate the perfect choice for kids and sports enthusiasts.","inc_cost":"49"},{"id":"3","name":"Trivex","desc_short":"Durable material with excellent optical clarity & full UV protection. Recommended for rimless style frames.","desc_long":"The Trivex (1.53 index) lens material is a great choice for lower and mid-range prescriptions, with enhanced durability in rimless style frames. Trivex lenses are thinner and lighter than standard plastic, with excellent optical clarity and Full UV protection.","inc_cost":"69"},{"id":"4","name":"High Index 1.67","desc_short":"Thin and light material for higher prescriptions. Full UV protection. ","desc_long":"The High Index (1.67 index) lens material is a great choice for high-power prescriptions. High Index 1.67 lenses are thinner and lighter than every material except High Index 1.74. They have 100% UV protection and work well with most frame styles.","inc_cost":"99"},{"id":"5","name":"High Index 1.74","desc_short":"Thinnest and lightest eyeglass lens material. Includes Anti-Glare! Full UV protection. ","desc_long":"The High Index (1.74 index) lens material is the thinnest and lightest lens material in the world, and is the best choice for high-power prescriptions, or anyone who wants the thinnest lens for their application. They have 100% UV protection and work well with most frame styles other than drilled rimless.","inc_cost":"169"}],
      lensSpecialData: [{"id":"1","name":"Clear","desc_short":"Lenses that are always clear. ","desc_long":"","inc_cost":"0"},{"id":"2","name":"Transitions Signature VII","desc_short":"Color changing lenses that turn from clear indoors to dark outside. They do not turn dark in the car.","desc_long":"","inc_cost":"60"},{"id":"3","name":"Transitions XTRActive","desc_short":"Light tint indoors to dark sunglass outside.","desc_long":"","inc_cost":"90"},{"id":"4","name":"Polarized","desc_short":"Full-time dark lenses that eliminate glare and reflections. Tint Included.","desc_long":"","inc_cost":"50"},{"id":"5","name":"Drivewear","desc_short":"Polarized & Transitions lens that turns from light yellow to a darker red.","desc_long":"","inc_cost":"140"},{"id":"6","name":"Tinted","desc_short":"Eyeglass lenses that are dyed to a specific shade and density. ","desc_long":"","inc_cost":"10"}],
    };
    this.success = this.success.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  
  componentDidMount() {
    fetch(API[0])
      .then(response => {return response.json()})
      .then(data => {
        // let frames = data.hits.map((frame) => {
        //   return(
        //     <div key={frame.created_at}>
        //       {frame.title}
        //     </div>
        //   )
        // })
        this.setState({frameData: data});
        console.log("state", this.state.frameData);
    });
    fetch(API[1])
      .then(response => {return response.json()})
      .then(data => {
        // let frames = data.hits.map((frame) => {
        //   return(
        //     <div key={frame.created_at}>
        //       {frame.title}
        //     </div>
        //   )
        // })
        this.setState({lensData: data});
        console.log("state", this.state.lensData);
      });
    fetch(API[2])
      .then(response => {return response.json()})
      .then(data => {
        // let frames = data.hits.map((frame) => {
        //   return(
        //     <div key={frame.created_at}>
        //       {frame.title}
        //     </div>
        //   )
        // })
        this.setState({lensMaterialData: data});
        console.log("state", this.state.lensMaterialData);
      });
    fetch(API[3])
      .then(response => {return response.json()})
      .then(data => {
        // let frames = data.hits.map((frame) => {
        //   return(
        //     <div key={frame.created_at}>
        //       {frame.title}
        //     </div>
        //   )
        // })
        this.setState({lensSpecialData: data});
        console.log("state", this.state.lensSpecialData);
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
      // fetch(API[tab])
      //   .then(response => {return response.json()})
      //   .then(data => {
      //     // let frames = data.hits.map((frame) => {
      //     //   return(
      //     //     <div key={frame.created_at}>
      //     //       {frame.title}
      //     //     </div>
      //     //   )
      //     // })
      //     this.setState({frameData: data});
      //     console.log("state", this.state.frameData);
      //   });
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
  setlensselectedIndex(index) {
    console.log(index);
    if (this.state.lensselectedIndex !== index) {
      this.setState({
        lensselectedIndex: index
      });
    }
  }
  setlensmaterialselectedIndex(index) {
    console.log(index);
    if (this.state.lensmaterialselectedIndex !== index) {
      this.setState({
        lensmaterialselectedIndex: index
      });
    }
  }
  setlensspecialselectedIndex(index) {
    console.log(index);
    if (this.state.lensspecialselectedIndex !== index) {
      this.setState({
        lensspecialselectedIndex: index
      });
    }
  }
  render() {
    const containerStyle = {
      zIndex: 1999
    };
    const { frameData, lensData, lensMaterialData, lensSpecialData } = this.state;
    // console.log(frameData)
    // console.log(frames);
    return (
      <div className="animated fadeIn">
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
            {  (this.state.selectedIndex>-1 && this.state.activeTab=='1' ) &&
              frameData[this.state.selectedIndex].desc_long
            }
            {  (this.state.lensselectedIndex>-1 && this.state.activeTab=='2' ) &&
              lensData[this.state.lensselectedIndex].desc_long
            }
            {  (this.state.lensmaterialselectedIndex>-1 && this.state.activeTab=='3' ) &&
              lensMaterialData[this.state.lensmaterialselectedIndex].desc_long
            }
            {  (this.state.lensspecialselectedIndex>-1 && this.state.activeTab=='4' ) &&
              lensSpecialData[this.state.lensspecialselectedIndex].desc_long
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
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  
                >
                  <i className="icon-direction"></i> <span
                  className={ this.state.activeTab === '2' ? "" : "d-none"}> Lens</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  
                >
                  <i className="icon-direction"></i> <span className={ this.state.activeTab === '3' ? "" : "d-none"}> Lens Material</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
               
                >
                  <i className="icon-direction"></i> <span className={ this.state.activeTab === '4' ? "" : "d-none"}> Special Lens</span>
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
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{color:'grey'}}></span>  <span style={{color:'#20a8d8',cursor:'pointer',marginBottom:'0'}} onClick={this.togglePrimary}><i className="icon-info"></i>&nbsp;<span style={{verticalAlign:'top'}}>Cat 1. More Info Link</span></span></p>
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          {
                            lensData.map((frame, i) =>
                            <tr key={i} onClick={() => { this.setlensselectedIndex(i); }}>
                              <td style={{verticalAlign:'middle'}}>
                                <p >{lensData[i].name}{/* <span style={{color:'grey'}}>Name</span> */}</p>
                                <p style={{color:'grey', marginBottom:'0px'}}>${lensData[i].inc_cost}</p>
                              </td>
                              <td style={{verticalAlign:'middle'}}>
                                <p >{lensData[i].desc_short}{ /*<span style={{color:'grey'}}>Description</span> */}</p>
                                <p style={{color:'grey', marginBottom:'0px'}} data-toggle="tooltip" title="Detailed Description"><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={() => { this.toggleDescription(); }}><i className="icon-link"></i>&nbsp;<span>Description</span></span></p>
                              </td>
                              <td style={{width:'100px'}}>
                                <img src={lensData[i].image_url} style={{width: '100%'}}/>
                              </td>  
                            </tr>)
                          }
                          </tbody>
                        </Table>
                        { this.state.lensselectedIndex>-1 &&
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
                              <p >{lensData[this.state.lensselectedIndex].name}</p>
                              <p style={{color:'grey', marginBottom:'0px'}}>${lensData[this.state.lensselectedIndex].inc_cost}</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >{lensData[this.state.lensselectedIndex].desc_short}</p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={() => {this.toggleDescription();}}><i className="icon-link"></i>&nbsp;<span>Description</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src={lensData[this.state.lensselectedIndex].image_url} style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        }
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}}  onClick={() => { this.toggle('1'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}}  onClick={() => {this.success(); this.toggle('3'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                  { this.state.lensselectedIndex>-1 &&
                    <Table responsive  style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src={lensData[this.state.lensselectedIndex].image_url} style={{width: '100%'}}/>
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
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>{lensData[this.state.lensselectedIndex].name}</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
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
                          {
                            lensMaterialData.map((frame, i) =>
                            <tr key={i} onClick={() => { this.setlensmaterialselectedIndex(i); }}>
                              <td style={{verticalAlign:'middle'}}>
                                <p >{lensMaterialData[i].name}{/* <span style={{color:'grey'}}>Name</span> */}</p>
                                <p style={{color:'grey', marginBottom:'0px'}}>${lensMaterialData[i].inc_cost}</p>
                              </td>
                              <td style={{verticalAlign:'middle'}}>
                                <p >{lensMaterialData[i].desc_short}{ /*<span style={{color:'grey'}}>Description</span> */}</p>
                                <p style={{color:'grey', marginBottom:'0px'}} data-toggle="tooltip" title="Detailed Description"><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={() => { this.toggleDescription(); }}><i className="icon-link"></i>&nbsp;<span>Description</span></span></p>
                              </td>
                              <td style={{width:'100px'}}>
                                <img src={lensMaterialData[i].image_url} style={{width: '100%'}}/>
                              </td>  
                            </tr>)
                          }
                          </tbody>
                        </Table>
                        { this.state.lensmaterialselectedIndex>-1 &&
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
                              <p >{lensMaterialData[this.state.lensmaterialselectedIndex].name}</p>
                              <p style={{color:'grey', marginBottom:'0px'}}>${lensMaterialData[this.state.lensmaterialselectedIndex].inc_cost}</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >{lensMaterialData[this.state.lensmaterialselectedIndex].desc_short}</p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={() => {this.toggleDescription();}}><i className="icon-link"></i>&nbsp;<span>Description</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src={lensMaterialData[this.state.lensmaterialselectedIndex].image_url} style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        }
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('2'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}} onClick={() => {this.success(); this.toggle('4'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                  { this.state.lensmaterialselectedIndex>-1 &&
                    <Table responsive  style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src={lensMaterialData[this.state.lensmaterialselectedIndex].image_url} style={{width: '100%'}}/>
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
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>{lensMaterialData[this.state.lensmaterialselectedIndex].name}</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
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
                          {
                            lensSpecialData.map((frame, i) =>
                            <tr key={i} onClick={() => { this.setlensspecialselectedIndex(i); }}>
                              <td style={{verticalAlign:'middle'}}>
                                <p >{lensSpecialData[i].name}{/* <span style={{color:'grey'}}>Name</span> */}</p>
                                <p style={{color:'grey', marginBottom:'0px'}}>${lensSpecialData[i].inc_cost}</p>
                              </td>
                              <td style={{verticalAlign:'middle'}}>
                                <p >{lensSpecialData[i].desc_short}{ /*<span style={{color:'grey'}}>Description</span> */}</p>
                                <p style={{color:'grey', marginBottom:'0px'}} data-toggle="tooltip" title="Detailed Description"><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={() => { this.toggleDescription(); }}><i className="icon-link"></i>&nbsp;<span>Description</span></span></p>
                              </td>
                              <td style={{width:'100px'}}>
                                <img src={lensSpecialData[i].image_url} style={{width: '100%'}}/>
                              </td>  
                            </tr>)
                          }
                          </tbody>
                        </Table>
                        { this.state.lensspecialselectedIndex>-1 &&
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
                              <p >{lensSpecialData[this.state.lensspecialselectedIndex].name}</p>
                              <p style={{color:'grey', marginBottom:'0px'}}>${lensSpecialData[this.state.lensspecialselectedIndex].inc_cost}</p>
                            </td>
                            <td style={{verticalAlign:'middle'}}>
                              <p >{lensSpecialData[this.state.lensspecialselectedIndex].desc_short}</p>
                              <p style={{color:'grey', marginBottom:'0px'}}><span style={{cursor:'pointer',verticalAlign:'middle',color:'#20a8d8',marginBottom:'0'}} onClick={() => {this.toggleDescription();}}><i className="icon-link"></i>&nbsp;<span>Description</span></span></p>
                            </td>
                            <td style={{width:'100px'}}>
                              <img src={lensSpecialData[this.state.lensspecialselectedIndex].image_url} style={{width: '100%'}}/>
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                        }
                      </CardBody>
                    </Card>
                    <CardBody style={{textAlign:'center'}}>
                      <Button className='col-md-2' color="primary" style={{float:'left'}} onClick={() => { this.toggle('3'); }}><i className="icon-arrow-left"></i>{'\u00A0'} Back</Button>
                      <Button className='col-md-2' style={{color:'#20a8d8',border: 'none',background:'none'}} onClick={() => { this.toggle('1'); }}><i className="icon-refresh"></i>{'\u00A0'} StartOver</Button>
                      <Button className='col-md-2' color="primary" style={{float:'right',marginBottom:'10px'}} onClick={() => {this.success(); this.toggle('5'); }}><i className="icon-arrow-right"></i>{'\u00A0'} Next</Button>
                    </CardBody>
                  </Col>
                  <Col xs="12" sm="4" md="4">
                  { this.state.lensspecialselectedIndex>-1 &&
                    <Table responsive  style={{marginBottom:'0px'}}>
                      <thead>
                        <tr>
                          <td style={{verticalAlign:'middle'}}>
                            <img src={lensSpecialData[this.state.lensspecialselectedIndex].image_url} style={{width: '100%'}}/>
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
                              <h6>Sub-Cat 1.a)<span style={{color: 'grey'}}>{lensSpecialData[this.state.lensspecialselectedIndex].name}</span><span style={{color: 'grey', float:'right'}}>$/pr</span></h6>
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
