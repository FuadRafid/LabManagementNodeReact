import React, {Component} from 'react';
import {Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row} from 'reactstrap';
import axios from 'axios';
class ItemPostEditor extends Component {
  state={
    imgPath:'',
    requestNo:''
  };
  handleClick = () => {


    let data= {
      item: this.props.itemId,
      amount:this.state.requestNo };
    console.log(data);
    axios.post('/addItemAmount',data )
      .then( (response) => {
        console.log(response);
        window.location.reload();

      })
      .catch(function (error) {
        console.log(error);
      });

  };

  handleClickRemove = () => {
    if(this.state.requestNo>this.props.amount || this.state.requestNo<=0)
    {
      alert("Enter correct amount");
      return;
    }
    let data= {
      item: this.props.itemId,
      amount: - this.state.requestNo
    };
    console.log(data);
    axios.post('/addItemAmount',data )
      .then( (response) => {
        console.log(response);
        window.location.reload();

      })
      .catch(function (error) {
        console.log(error);
      });

  };
  componentDidMount(){

    if(this.props.imgsrc.includes('/'))
    {
      this.setState({imgPath:this.props.imgsrc});

    }
    else
    {
      this.setState({imgPath:"http://localhost:8081/uploads/"+this.props.imgsrc});
    }

    console.log(this.props.imgsrc);
  }

  componentWillReceiveProps(nextProps)
  {
    var img=nextProps.imgsrc;
    if(img.includes('/'))
    {
      this.setState({imgSrc:this.props.imgsrc});

    }
    else
    {
      this.setState({imgSrc:"http://localhost:8081/uploads/"+img});
    }

  }
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
                  <Col md="3">
                  <img className="img-thumbnail" src= {this.state.imgPath} style={{width:'100%', height:'100%' }} />
                  </Col>
                  <Col md="6">
                  <h2>{this.props.name}</h2>
                  <p>{this.props.desc}</p>
                    <br/>
                    <p><b>Amount available: </b>{this.props.amount}</p>
                  </Col>
                  <Col md="3">
                  <Form>
                      <p className="text-muted">Add more to this item</p>
                      <InputGroup className="mb-3">
                        <Input type="text" placeholder="No. of Items"
                        onChange={(event) => this.setState({requestNo : event.target.value})}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button block color="primary" onClick={this.handleClick}>Add</Button>
                        </Col>
                        <Col xs="6">
                          <Button block color="danger" onClick={this.handleClickRemove}>Remove</Button>
                        </Col>
                        </Row>
                    </Form>
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

export default ItemPostEditor;
