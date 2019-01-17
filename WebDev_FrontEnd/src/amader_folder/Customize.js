import React, {Component} from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from 'reactstrap';
import ItemPostStudent from "./ItemPostStudent";
import ItemPostEditor from "./ItemPostEditor";

var namesList;

class AddItem extends Component {


  state = {
    categoryName: '',
    categoryNames:[],
    success: false,
    modalMsg: '',
    danger: false,
    colorTop:null,
    colorBottom:null,
    logoFile:''
  };

 componentDidMount() {
    let names = [];


    axios.post('/getCategories' )
      .then((response) => {
        console.log(response.data);
        names = response.data;
        console.log(names);

        namesList = names.map(function(data){
         return( <option value= {data.value} >{data.name}</option> );
        });

        this.setState({categoryNames:namesList});
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  handleClickAdd=() => {


    let data= {cat:this.state.categoryName};



    axios.post('/addCategory', data)
      .then((response) => {
        console.log(response);
        this.setState({success: true, modalMsg: 'Successfully Added'});
      })
      .catch((error) => {
        console.log(error);
        this.setState({danger: true, modalMsg: 'Failed to add. Fill up add fields'});
      });

  };

  handleClickDelete= () => {


    let data= {cat:document.getElementById("category").value};
    axios.post('/deleteCategory', data)
      .then((response) => {
        console.log(response);
        this.setState({success: true, modalMsg: 'Successfully Deleted'});
      })
      .catch((error) => {
        console.log(error);
        this.setState({danger: true, modalMsg: 'Failed to delete'});
      });

  };
  handleClickColor= () => {


    let data= {topColor:this.state.colorTop};
    axios.post('/setTopColor', data)
      .then((response) => {
        console.log(response);
       window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        this.setState({danger: true, modalMsg: 'Failed to change color'});
      });

  };

  handleClickBottomColor= () => {


    let data= {bottomColor:this.state.colorBottom};
    axios.post('/setBottomColor', data)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        this.setState({danger: true, modalMsg: 'Failed to change color'});
      });

  };

  handleClickLogo=() =>{
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    var formData=new FormData();

    formData.append('file',this.state.logoFile);

    axios.post('/changeLogo',formData,config )
      .then( (response) => {
        console.log(response);
        window.location.reload();

      })
      .catch((error) => {
        console.log(error);
        this.setState({danger:true,modalMsg: 'Failed to add. Fill up add fields' });
      });
  };


  toggleSuccess = () => {
    this.setState({
      success: !this.state.success,
    });
  };

  toggleDanger = () => {
    this.setState({
      danger: !this.state.danger,
    });
  };

  render() {
    return (
      <div className=" flex-row">
        <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
               className={'modal-success ' + this.props.className}>
          <ModalHeader toggle={this.toggleSuccess}>Message</ModalHeader>
          <ModalBody>
            {this.state.modalMsg}
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleSuccess}>OK</Button>{' '}
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
               className={'modal-danger ' + this.props.className}>
          <ModalHeader toggle={this.toggleDanger}>Message</ModalHeader>
          <ModalBody>
            {this.state.modalMsg}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggleDanger}>OK</Button>{' '}
          </ModalFooter>
        </Modal>

        <Container>
          <Row >
            <Col md="6">
              <Row className="justify-content-center">
                <Col md="12">
                  <CardGroup>
                    <Card>
                      <CardHeader>
                        <strong>Add Category</strong>
                        <small> Form</small>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12">
                            <FormGroup>
                              <Label htmlFor="name">Caterory Name</Label>
                              <Input type="text" id="name" placeholder="Enter item title"
                                     onChange={(event) => this.setState({categoryName: event.target.value})}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="4">
                          </Col>
                          <Col xs="4">
                          </Col>
                          <Col xs="4">
                            <FormGroup>
                              <Button block color="success" onClick={this.handleClickAdd}>Add Category</Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <Row className="justify-content-center">
                <Col md="12">
                  <CardGroup>
                    <Card>
                      <CardHeader>
                        <strong>Delete Category</strong>
                        <small> Form</small>

                      </CardHeader>
                      <CardBody>

                        <Row>
                          <Col xs="12">
                            <FormGroup>
                              <Label htmlFor="category">Categroy</Label>
                              <Input type="select" id="category"
                                     onChange={(event) => this.setState({category: event.target.value})}
                              >
                                {this.state.categoryNames}
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="4">

                          </Col>
                          <Col xs="3">

                          </Col>
                          <Col xs="5">
                            <FormGroup>
                              {/*<Label style={{color: "red"}}>All fields are required</Label>*/}
                              <Button block color="danger" onClick={this.handleClickDelete}>Delete Category</Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Col>

            <Col md="6" style={{marginTop:"10px"}}>
            <Row className="justify-content-center">
              <Col md="12">
                <CardGroup>
                  <Card>
                    <CardHeader>
                      <strong>Change Top Bar Color</strong>
                    </CardHeader>
                    <CardBody>

                      <Row>
                        <Col xs="3">
                          <FormGroup>
                            <Label >Select color</Label>
                          </FormGroup>
                        </Col>
                        <Col xs="2">
                          <FormGroup>
                            <Input type="color" id="color"
                                   onChange={(event) => this.setState({colorTop: event.target.value})}
                            >
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="4">

                        </Col>
                        <Col xs="3">

                        </Col>
                        <Col xs="5">
                          <FormGroup>
                            {/*<Label style={{color: "red"}}>All fields are required</Label>*/}
                            <Button block color="primary" onClick={this.handleClickColor}>Change Color</Button>
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Col>

            <Col md="6" style={{marginTop:"10px"}}>
              <Row className="justify-content-center">
                <Col md="12">
                  <CardGroup>
                    <Card>
                      <CardHeader>
                        <strong>Change Bottom Bar Color</strong>
                      </CardHeader>
                      <CardBody>

                        <Row>
                          <Col xs="3">
                            <FormGroup>
                              <Label >Select color</Label>
                            </FormGroup>
                          </Col>
                          <Col xs="2">
                            <FormGroup>
                              <Input type="color" id="color"
                                     onChange={(event) => this.setState({colorBottom: event.target.value})}
                              >
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="4">

                          </Col>
                          <Col xs="3">

                          </Col>
                          <Col xs="5">
                            <FormGroup>
                              {/*<Label style={{color: "red"}}>All fields are required</Label>*/}
                              <Button block color="primary" onClick={this.handleClickBottomColor}>Change Color</Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Col>
            <Col md="6" style={{marginTop:"10px"}}>
              <Row className="justify-content-center">
                <Col md="12">
                  <CardGroup>
                    <Card>
                      <CardHeader>
                        <strong>Site Logo</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12">
                            <FormGroup>
                              <Label >Select logo <br/> *Square Images Only</Label>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <Input type="file" name="file" id="file"
                                     onChange={(event) => this.setState({logoFile : event.target.files[0]})}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="4">
                          </Col>
                          <Col xs="3">
                          </Col>
                          <Col xs="5">
                            <FormGroup>
                              {/*<Label style={{color: "red"}}>All fields are required</Label>*/}
                              <Button block color="success" onClick={this.handleClickLogo}>Change Logo</Button>
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Col>

          </Row>
        </Container>

      </div>
    );
  }


}

export default AddItem;
