import React, { Component } from 'react';
import ItemPostEditor from './ItemPostEditor';
import ItemPostStudent from './ItemPostStudent';
import axios from 'axios';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


var names = [];
var namesList;


class ActiveCompPage extends Component {
  state={
    namesListState:null
  };
  componentDidMount()
   {


    // axios.post('/items', {
    //     cat: "general"
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    let data= {cat:"actComp"};
    var type = window.sessionStorage.getItem("userType");

    axios.post('/getItems',data )
      .then((response) => {
        console.log(response.data);
        names=response.data;
        console.log(names);

        namesList = names.map(function(data){

          if(type == "student"){
            return (
              <ItemPostStudent amount={data.amount} itemId ={data.id} imgsrc={data.image} name={data.title} desc={data.description}/>
            );
          }
          else if(type == "editor"){
            return (
              <ItemPostEditor amount={data.amount} itemId ={data.id} imgsrc={data.image} name={data.title} desc={data.description}/>
            );
          }
        });

        this.setState({namesListState:namesList});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {

    return (
        <div>
            <Col>
        <ul>{this.state.namesListState}</ul>
            </Col>
        </div>
        );
  }
}

export default ActiveCompPage;
