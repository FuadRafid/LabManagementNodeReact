import React, { Component } from 'react';
import {Media,  Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
var names = [];
var namesList;
let userId;
class HistoryItemStudent extends Component {
  state={
    requestNo:'',
    namesListState:null
  };
  componentDidMount()
  {
    let data= {cat:"gate"};
    userId =window.sessionStorage.getItem("userId");
    axios.post('/getStudentHistoryItems',{user_id : userId})
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
                        <h2>Your previous requests</h2>
                        <ul>
                          {this.state.namesListState}
                        </ul>
                        {/*<h3>Item: {this.props.name}</h3>*/}
                        {/*<p>Amount: {this.props.desc}</p>*/}
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

export default HistoryItemStudent;
