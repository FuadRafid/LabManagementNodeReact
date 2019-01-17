import React, { Component } from 'react';
import ItemPostEditor from './ItemPostEditor';
import ItemPostStudent from './ItemPostStudent';
import axios from 'axios';
import "./navPage.css"
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


var names = [];
var namesList;


class NavPage extends Component {
  state={
    namesListState:null
  };

  onClickHandler=(name,value)=>{
    this.props.handle(value);
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

    axios.post('/getCategories',data )
      .then((response) => {
        console.log(response.data);
        names=response.data;
        console.log(names);

        namesList = names.map((data)=>{


            return (
              <li>
                <div onClick={()=> this.onClickHandler(data.name,data.value)}>
                <a >
                  <i className="fa fa-cube	fa-lg"/> {'\u00A0'}{data.name}
                </a>
                </div>
              </li>
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
      <div className="nav-side-menu" style={{paddingLeft:"2px"}}>
        <div className="brand">Extended Categories</div>
        <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse"/>

        <div className="menu-list">

          <ul id="menu-content" className="menu-content collapse out">
            {this.state.namesListState}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavPage;
