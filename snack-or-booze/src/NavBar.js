import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({snacks, drinks}) {
  let numSnacks=snacks.length
  let numDrinks=drinks.length
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink> 

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks {`(${numSnacks})`}</NavLink>
            
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks {`(${numDrinks})`}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/newItem">Add item</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
