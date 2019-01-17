import React, { Component } from 'react';
import {Media,  Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
var names = [];
var namesList;
class RequestedItemPost extends Component {
  state={
    requestNo:'',
    namesListState:null
  };
  componentDidMount()
  {
    let data= {cat:"gate"};

    axios.post('/getStudentRequestedItems',{user_id:this.props.user_id})
      .then((response) => {
        console.log(response.data);
        names=response.data;
        console.log(names);

        namesList = names.map(function(data){

          return (
            <li> <p>Item: {data.title}<br/>Amount: {data.amount}</p> </li>
          );

        });

        this.setState({namesListState:namesList});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleclick=()=>{
    let data={std_id: this.props.user_id};
    axios.post("/approveRequest",data) .then((response) => {
      window.location.reload();
  });
  };

  handleclickDelete=()=>{
    let data={std_id: this.props.user_id};
    axios.post("/deleteRequest",data) .then((response) => {
      window.location.reload();
    });
  };

  render() {
    return (
      <div className=" flex-row">
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <CardGroup>
                <Card className="p-2">
                  <CardBody>
                      <Row>
                  <Col md="9">
                  <h2>{this.props.user_id}</h2>
                    <br/>
                    <ul>
                      {this.state.namesListState}
                    </ul>
                  {/*<h3>Item: {this.props.name}</h3>*/}
                  {/*<p>Amount: {this.props.desc}</p>*/}
                  </Col>
                  <Col md="3">
                 <p className="text-muted">Approve or decline the request</p>
                      {/* <InputGroup className="mb-3">
                        <Input type="number" placeholder="No. of Items"
                        onChange={(event) => this.setState({requestNo : event.target.value})}
                        />
                      </InputGroup> */}
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.handleclick}>Approve</Button>
                        </Col>

                        <Col xs="6">
                          <Button color="danger" className="px-4" onClick={this.handleclickDelete}>Decline</Button>
                        </Col>

                        </Row>

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

export default RequestedItemPost;
