import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';

export const Heading = () => {
  return (
    <div>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/" className="mt-50">
            My Team
          </NavbarBrand>
          <Nav>
            <NavItem className="ms-auto">
              <Link to="/add" className="btn btn-primary">
                Add User
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
