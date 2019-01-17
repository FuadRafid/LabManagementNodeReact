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
    username:'',
    password:'',
  };
  componentDidMount() {
    let names = [];


    axios.post('/getCategories')
      .then((response) => {
        console.log(response.data);
        names = response.data;
        console.log(names);

        namesList = names.map(function (data) {
          return (<option value={data.value}>{data.name}</option>);
        });

        this.setState({categoryNames: namesList});
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  handleClick = () => {

    let data={username:this.state.username,password:this.state.password};
    axios.post('/addUser',data )
      .then( (response) => {
        console.log(response);
        this.setState({success:true,modalMsg: 'Succesfully Added'});

      })
      .catch((error) => {
        console.log(error);
        this.setState({danger:true,modalMsg: 'Failed to add. User already exists' });
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
                          <Label htmlFor="name">User Name</Label>
                          <Input type="text" id="name" placeholder="Enter item title"
                                 onChange={(event) => this.setState({username : event.target.value})}
                          />
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="name">Passsword</Label>
                          <Input type="password" id="name" placeholder="Enter item title"
                                 onChange={(event) => this.setState({password : event.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={8}/>
                      <Col xs="4">
                        <FormGroup>
                          <Label style={{color:"red"}}>All fields are required</Label>
                          <Button block color="success" onClick={this.handleClick}>Add User</Button>
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
