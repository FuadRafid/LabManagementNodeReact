import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Switch , Redirect} from 'react-router-dom';
import axios from 'axios';
class Login extends Component {
    state = {
    toDashboard: false,
    userName:"",
    userPass:"",
    user_type:"",
    user_id:"",
    user_name:""
    };


    handleClick = () => {
    let data= {user: this.state.userName, pass: this.state.userPass };
    let dashBoard=false;
    axios.post('/getUser',data )
      .then( (response) => {
        console.log(response);
        if(response.data == "NOTOK"){
          alert("Wrong Username or password!")
        }
        else {
          this.setState(() => ({
            toDashboard: true,
            user_type: response.data[0].type,
            user_id: response.data[0].id,
            user_name: response.data[0].user_id
          }))
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    };

  render() {
    if (this.state.toDashboard === true) {
      window.sessionStorage.setItem("isUserLogged", "true");
      window.sessionStorage.setItem("userType", this.state.user_type);
      window.sessionStorage.setItem("userId", this.state.user_id);
      window.sessionStorage.setItem("userName", this.state.user_name);
      return(<Switch> <Redirect to='/'/> </Switch>);
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>

                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username"
                        onChange={(event) => this.setState({userName : event.target.value})}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password"
                        onChange={(event) => this.setState({userPass : event.target.value})}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4"  onClick={this.handleClick}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>

                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-4 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>MIST<br/> Lab Manager</h2>
                      <br/>
                      <img src={"assets/img/sygnet.png"} className="img-responsive" style={{width:"40%"}}/>
                      <br/>
                    </div>
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

export default Login;
