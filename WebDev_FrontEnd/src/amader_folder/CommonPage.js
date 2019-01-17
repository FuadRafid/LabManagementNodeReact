import React, { Component } from 'react';
import ItemPostEditor from './ItemPostEditor';
import ItemPostStudent from './ItemPostStudent';
import axios from 'axios';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


var names = [];
var namesList;


class CommonPage extends Component {
  state={
    namesListState:null
  };

  componentDidMount()
  {

    var type = window.sessionStorage.getItem("userType");
    names=this.props.cat;
    namesList = this.props.cat.map(function(data){
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

  componentWillReceiveProps(nextProps)
  {
    names=nextProps.cat;
    namesList = nextProps.cat.map(function(data){
      var type = window.sessionStorage.getItem("userType");
      if(type == "student"){

        return (
          <ItemPostStudent  itemId ={data.id} imgsrc={data.image} name={data.title} desc={data.description} amount={data.amount}/>
        );
      }
      else if(type == "editor"){
        return (
          <ItemPostEditor itemId ={data.id} imgsrc={data.image} name={data.title} desc={data.description}  amount={data.amount}/>
        );
      }
    });

    this.setState({namesListState:namesList});
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

export default CommonPage;
