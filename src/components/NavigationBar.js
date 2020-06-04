import React, { useState } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function NavigationBar() {
  // Fetch student from localStorage to check whether he is login or not
  const isStudentLogin = localStorage.getItem("login");

  // Fetch admin detail from localStorage to check whether he is login or not
  const isAdminLogin = localStorage.getItem("adminDetails");

  const history = useHistory();
  const handleCart = () => history.push("/cart");

  const [state, setState] = useState(true);

  const handleLogout = () => {
    localStorage.setItem("login", "false");
    localStorage.setItem("bookedRoomInfo", null);
    setState(false);
    history.push("/");
  };
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/" className="linkBehaviour">
            ABC Hostel
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/" className="linkBehaviour">
              Home
            </Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            {isStudentLogin == "false" && (
              <Button variant="outline-danger">
                <Link to="/login" className="linkBehaviour">
                  Login
                </Link>
              </Button>
            )}
            &nbsp;&nbsp;
            {isStudentLogin == "false" && (
              <Button variant="outline-danger">
                <Link to="/signup" className="linkBehaviour">
                  SignUp
                </Link>
              </Button>
            )}
            &nbsp;&nbsp;
            {isStudentLogin === "true" && state && (
              <Button variant="warning" onClick={handleCart}>
                Cart
              </Button>
            )}
            &nbsp;&nbsp;
            {isStudentLogin === "true" && state && (
              <Button variant="warning" onClick={handleLogout}>
                Logout
              </Button>
            )}
            &nbsp;&nbsp;
            <Button variant="outline-danger">
              <Link to="/admin" className="linkBehaviour">
                Admin Login
              </Link>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
