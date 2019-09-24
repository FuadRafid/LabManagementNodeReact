import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.png'
import navigationS from "../../_nav2";
import navigationE from "../../_nav";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  state= {
    loggedOut : false,
    profile : false
  };

  handleClick = () => {
          this.setState(() => ({
            loggedOut: true

          }))
        };

  handleClickProfile = () => {
    this.setState(() => ({
      profile: true

    }))


  };

  render() {
    if(this.state.loggedOut === true ){
      window.sessionStorage.setItem("isUserLogged", "false");
      window.sessionStorage.setItem("userType", null);
      return(<Switch> <Redirect to='/login'/> </Switch>  );
    }

    if(this.state.profile === true ){
      let userTypeName = window.sessionStorage.getItem("userType");

      if(userTypeName == "student"){
        return(<Switch> <Redirect to='profile_st'/> </Switch>  );
      }

      if(userTypeName == "editor"){
        return(<Switch> <Redirect to='profile_ed'/> </Switch>  );
      }

    }

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />


        
        <AppSidebarToggler className="d-md-down-none" display="lg" style={{width: "2.5%", height: "80%",marginBottom:"0.5%"}} />
        <img className="" src={'http://localhost:8081/uploads/'+this.props.logoSrc} style={{width: "2.5%", height: "80%",marginLeft:"1%",marginBottom:"0.5%"}}/>
        <p style={{textAlign:"center",marginLeft:"1%",marginTop:"0.5%"}}><b>MIST<br/>Lab Manager</b></p>
        {/* <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/users">Users</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav> */}
        <Nav className="ml-auto" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem> */}
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'http://localhost:8081/uploads/user.png'} className="img-avatar" style={{marginBottom:"30%"}} />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
               <DropdownItem header tag="div" className="text-center" ><strong>Account</strong></DropdownItem>
              <DropdownItem header tag="div" className="text-center" ><strong>{window.sessionStorage.getItem("userName")}</strong></DropdownItem>
              {/* <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>

              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem> */}
              {/*<DropdownItem onClick={this.handleClickProfile}><i className="fa fa-user"  ></i> Profile</DropdownItem>*/}
              <DropdownItem onClick={this.handleClick}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
