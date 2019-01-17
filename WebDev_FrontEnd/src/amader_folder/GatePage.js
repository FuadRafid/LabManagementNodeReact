import React, { Component } from 'react';
import ItemPostEditor from './ItemPostEditor';
import ItemPostStudent from './ItemPostStudent';
import axios from 'axios';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


var names = [];
var namesList;


class GatePage extends Component {
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

    let data= {cat:"gate"};
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

  searchClicked=()=>{
    let searchList=[];
    for(let i=0;i<names.length;i++)
    {
      if(names[i].title.toLowerCase().includes(this.state.searchVal.toLowerCase()))
      {
        searchList.push(names[i]);
      }
    }
    console.log(searchList);

    var type = window.sessionStorage.getItem("userType");
    namesList=[];
    namesList = searchList.map(function(data){

      if(type == "student"){
        return (
          <ItemPostStudent  itemId ={data.id} imgsrc={data.image} name={data.title} desc={data.description} amount={data.amount}/>
        );
      }
      else if(type == "editor"){
        return (
          <ItemPostEditor itemId ={data.id} imgsrc={data.image} name={data.title} desc={data.description} amount={data.amount}/>
        );
      }
    });

    this.setState({namesListState:namesList});
  };
}

export default GatePage;
