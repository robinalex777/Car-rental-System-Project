import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import { Link } from "react-router-dom";

class SideNavBar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

   handleLogout=()=>{
    if(localStorage.getItem('admin')!=null){
      localStorage.removeItem('admin');
    }
  };
  render() {
    return (
      <SideNav style={{ height: "100%", position: "fixed" , backgroundColor:"blue"}}  expanded={this.state.isVisible}>
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
              <Link to={"/adminhome"}>
              Home
              </Link>
              
             </NavText>
          </NavItem>
       
          
          <NavItem eventKey="logout">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart "
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>
               <Link to={"/adminlogin"} onClick={this.handleLogout}>logout
            {/* <button className="btn btn-primary "onClick={this.handleLogout}>LogOut</button>  */}
              </Link></NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar1;