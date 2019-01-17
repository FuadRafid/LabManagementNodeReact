import React, {Component} from 'react';
import {Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, Row} from 'reactstrap';
import axios from 'axios';
import ItemPostEditor from "./ItemPostEditor";

class ItemPost extends Component {
  state={
    requestNo:'',
    imgSrc:''
  };
  // componentWillMount(){
  //
  //   if(this.props.imgsrc.includes('/'))
  //   {
  //     this.setState({imgSrc:this.props.imgsrc});
  //
  //   }
  //   else
  //   {
  //     this.setState({imgSrc:"http://localhost:8081/uploads/"+this.props.imgsrc});
  //   }
  //   console.log(this.props.imgsrc);
  // }

  componentDidMount(){

    if(this.props.imgsrc.includes('/'))
    {
      this.setState({imgSrc:this.props.imgsrc});

    }
    else
    {
      this.setState({imgSrc:"http://localhost:8081/uploads/"+this.props.imgsrc});
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

  handleClick = () => {

  if(this.state.requestNo>this.props.amount || this.state.requestNo<=0)
  {
    alert("Enter correct amount");
    return;
  }

    alert(this.state.requestNo+" "+this.props.name+" requested");
    let user_id=window.sessionStorage.getItem("userId");
    let data= {user: user_id,
      item: this.props.itemId,
      amount:this.state.requestNo };
    console.log(data);
    axios.post('/requestItemStudent',data )
      .then( (response) => {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload();
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
                  <Col md="3">
                  <img className="img-thumbnail" src= {this.state.imgSrc} style={{width:'100%', height:'100%' }} />
                  </Col>
                  <Col md="6">
                  <h2>{this.props.name}</h2>
                  <p>{this.props.desc}</p>
                    <br/>
                    <p>{this.props.amount}</p>
                  </Col>
                  <Col md="3">
                 <p className="text-muted">Place your request</p>
                      <InputGroup className="mb-3">
                        <Input type="number" placeholder="No. of Items"
                        onChange={(event) => this.setState({requestNo : event.target.value})}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.handleClick}>Request</Button>
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

export default ItemPost;
