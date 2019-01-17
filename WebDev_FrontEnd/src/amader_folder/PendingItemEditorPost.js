import React, { Component } from 'react';
import {Media,  Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
var names = [];
var namesList;
class PendingItemEditorPost extends Component {
  state={
    requestNo:'',
    namesListState:null,
    amount:0
  };
  componentDidMount()
  {
    let data= {cat:"gate"};

    axios.post('/getEditorPendingItems',{user_id:this.props.user_id})
      .then((response) => {
        console.log(response.data);
        names=response.data;
        console.log(names);

        namesList = names.map((data)=>{

          return (
            <li> <p>Item: {data.title}<br/>Amount: {data.amount}</p>
              <Input style={{width:"20%",marginBottom:"10px"}} type="number" id="name" placeholder="Enter amount"
              onChange={(event) => this.setState({amount : event.target.value})} />
              <Button color="primary" className="px-4" onClick={()=>this.handleclickItem(data.id,data.amount)}>Clear</Button><br/> </li>
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
    axios.post("/returnItem",data) .then((response) => {
      window.location.reload();
    });
  };

  handleclickItem=(id,amount)=> {
    if (this.state.amount == 0||this.state.amount==amount) {
      let data = {item_id: id};
      axios.post("/clearItem", data).then((response) => {
        window.location.reload();
      });
    }
    else
    {
      let data = {item_id: id,amount:this.state.amount};
      axios.post("/returnItemAmount", data).then((response) => {
        window.location.reload();
      });

    }  };

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
                        <p className="text-muted">Click to clear all items</p>
                        {/* <InputGroup className="mb-3">
                        <Input type="number" placeholder="No. of Items"
                        onChange={(event) => this.setState({requestNo : event.target.value})}
                        />
                      </InputGroup> */}
                        <Row>
                          <Col xs="6">
                            <Button color="primary" className="px-4" onClick={this.handleclick}>Clear</Button>
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

export default PendingItemEditorPost;
