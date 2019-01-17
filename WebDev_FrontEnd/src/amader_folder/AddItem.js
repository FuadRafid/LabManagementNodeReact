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
var namesList;

class AddItem extends Component {
  state={
    itemName:'',
    description:'',
    amount:'',
    category:'',
    photo:'',
    success:false,
    modalMsg:'',
    danger:false,
    categoryNames:[]
  };
  componentDidMount() {
    let names = [];


    // axios.post('/getCategories')
    //   .then((response) => {
    //     console.log(response.data);
    //     names = response.data;
    //     console.log(names);
    //
    //     namesList = names.map(function (data) {
    //       return (<option value={data.value}>{data.name}</option>);
    //     });
    //
    //     this.setState({categoryNames: namesList});
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  }

    handleClick = () => {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    var formData=new FormData();
    formData.append('itemName',this.state.itemName);
    formData.append('description',this.state.description);
    formData.append('amount',this.state.amount);
    formData.append('category',document.getElementById("category").value);
    formData.append('photo',this.state.photo);

    axios.post('/addItem',formData,config )
      .then( (response) => {
        console.log(response);
        this.setState({success:true,modalMsg: 'Succesfully Added'});

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

  toggleDanger=()=> {
    this.setState({
      danger: !this.state.danger,
    });
  }

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
          <Row className="justify-content-center">
            <Col md="12">
              <CardGroup>
                      <Card>
                        <CardHeader>
                          <strong>Add Item</strong>
                          <small> Form</small>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col xs="6">
                              <FormGroup>
                                <Label htmlFor="name">Title</Label>
                                <Input type="text" id="name" placeholder="Enter item title"
                                onChange={(event) => this.setState({itemName : event.target.value})}
                                />
                              </FormGroup>
                            </Col>
                            <Col xs="6">
                              <FormGroup>
                                <Label htmlFor="category">Categroy</Label>
                                <Input type="select" id="category"
                                       onChange={(event) => this.setState({category : event.target.value})}
                                >
                                  <option value="gate">Gates</option>
                                  <option value="memory">Memory</option>
                                  <option value="actComp">Active Component</option>
                                  <option value="passComp">Passive Component</option>
                                  <option value="others">Others</option>
                                  <option value="hardware">Hardware</option>
                                  <option value="meters">Meter</option>
                                  <option value="processor">Processor</option>
                                  {this.state.categoryNames}
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="12">
                              <FormGroup>
                                <Label htmlFor="desc">Description</Label>
                                <Input type="textarea" id="desc" placeholder="Enter description here"
                                onChange={(event) => this.setState({description : event.target.value})}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="4">
                              <FormGroup>
                                <Label htmlFor="amount">Amount</Label>
                                <Input type="number" name="amount" id="amount"
                                 onChange={(event) => this.setState({amount : event.target.value})}
                                />
                              </FormGroup>
                            </Col>
                            <Col xs="4">
                              <FormGroup>
                                <Label htmlFor="file">Picture</Label>
                                <Input type="file" name="file" id="file"
                                onChange={(event) => this.setState({photo : event.target.files[0]})}
                                />
                              </FormGroup>
                            </Col>
                            <Col xs="4">
                              <FormGroup>
                                <Label style={{color:"red"}}>All fields are required</Label>
                                <Button block color="success" onClick={this.handleClick}>Add Item</Button>
                              </FormGroup>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default AddItem;
