import React, { Component } from 'react';
import RequestedItemPost from './RequestedItemPost';
import axios from 'axios';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import ItemPostStudent from "./ItemPostStudent";
import ItemPostEditor from "./ItemPostEditor";


var names = [];
var namesList;


class RequestedItemPage extends Component {
  state={
    namesListState:null
  };


  searchClicked=()=>{
    let searchList=[];
    for(let i=0;i<names.length;i++)
    {
      if(names[i].user_id.toLowerCase().includes(this.state.searchVal.toLowerCase()))
      {
        searchList.push(names[i]);
      }
    }
    console.log(searchList);

    namesList=[];
    namesList = searchList.map(function(data){

      return <RequestedItemPost itemId ={data.user_id} user_id={data.user_id}/>
    });

    this.setState({namesListState:namesList});
  };

  componentDidMount()
   {
    let data= {cat:"gate"};

    axios.post('/getRequestedItems')
      .then((response) => {
        console.log(response.data);
        names=response.data;
        console.log(names);

        namesList = names.map(function(data){

            return (
              <RequestedItemPost itemId ={data.user_id} user_id={data.user_id}/>
            );

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
          <div align="right" style={{marginRight:"15%", marginBottom:"10px"}}>
            <input  onChange={(event) => this.setState({searchVal : event.target.value})}/>
            <button
              onClick={this.searchClicked}>Search</button>
          </div>
            <Col>
        <ul>{this.state.namesListState}</ul>
            </Col>
        </div>
        );
  }
}

export default RequestedItemPage;
