import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container,Row,Col } from 'reactstrap';
import CommonPage from "../../amader_folder/CommonPage";

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigationE from '../../_nav';
import navigationS from '../../_nav2';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import NavPage from "../../amader_folder/NavPage";
import "../../amader_folder/navPage.css";
import axios from 'axios';


let loggedInName="asda";
let userTypeName="asda";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.handleToUpdate.bind(this);

  }
  state = {
    loggedIn : false,
    nav : null,
    catag:null,
    navClick:true,
    topColor:"#ffffff",
    bottomColor:"#eff2f4",
    logo:"sygnet.png"
  };
  componentWillMount(){
    loggedInName = window.sessionStorage.getItem("isUserLogged");
    userTypeName = window.sessionStorage.getItem("userType");
    console.log(userTypeName);

    if(userTypeName == "student"){
      this.setState({
        nav:navigationS
      });
    }
    if(userTypeName == "editor"){
      this.setState({
        nav:navigationE
      });
    }
    if(loggedInName === "true"){
      this.state.loggedIn = true;
    }
  }
  componentDidMount(){
    axios.post('/getSiteData')
      .then((response) => {
        console.log(response.data);
        this.setState({
          topColor: response.data[0].top_color,
          bottomColor: response.data[0].bottom_color,
          logo:response.data[0].logo
        });

      })
  }

  handleToUpdate(someArg){
    let vart=someArg;

    let data= {cat:someArg};
    axios.post('/getItems',data )
      .then((response) => {
        console.log(response.data);
        let names=response.data;
        console.log(names);
          this.setState({catag:names,navClick:false});
      })

  }

  render() {
    if(this.state.loggedIn == false){
      return(<Switch> <Redirect to = '/login'/></Switch>)
    }
    var mainpage;
    if(this.state.navClick)
    {
      mainpage =
      <Switch>
        {routes.map((route, idx) => {
            return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                <route.component {...props} />
              )} />)
              : (null);
          },
        )}
        <Redirect from="/" to="/dashboard" />
      </Switch>
    }
    else {
      mainpage = <CommonPage cat={this.state.catag}/>

    }    let handleToUpdate  =   this.handleToUpdate;
    return (
      <div className="app">
        <AppHeader fixed style={{backgroundColor:this.state.topColor}}>
           <DefaultHeader logoSrc={this.state.logo}/>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <div  className="container-fluid scrollable-content" style={{paddingLeft:"0px"}}>
            <div onClick={()=>this.setState({navClick: true})}  style={{paddingLeft:"0px"}}>
            <AppSidebarNav navConfig={this.state.nav} {...this.props} />
            </div>
            <NavPage handle={handleToUpdate.bind(this)}/>
            </div>
          </AppSidebar>
          <main className="main" style={{padding:"2%"}}>
            <Container fluid>
              {
                mainpage
              }
            </Container>
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter style={{backgroundColor:this.state.bottomColor}}>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
