import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function AdminLogin() {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleAdmin = (e) => {
    e.preventDefault();
    const adminUname = e.target[0].value;
    const adminPass = e.target[1].value;
    if (adminUname === "admin" && adminPass === "admin") {
      history.push("/controlpanel");

      const adminDetails = {
        uname: "admin",
        password: "admin",
      };
      // Set admin data to localStorage
      localStorage.setItem("adminDetails", JSON.stringify(adminDetails));
    } else {
      setError(true);
    }
  };

  // Fetch adminnDetails from localStorage to check whether he is login or not
  const isAdminLogin = JSON.parse(localStorage.getItem("adminDetails"));
  isAdminLogin && history.push("/controlpanel");

  return (
    <div style={{ height: "45vh", background: "#c8d6e5" }}>
      <br />
      <h1
        style={{ background: "#576574", color: "#c8d6e5", textAlign: "center" }}
      >
        Admin Login Area
      </h1>
      <Form onSubmit={handleAdmin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="John" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {error && (
          <Form.Group controlId="formBasicError">
            <Form.Label style={{ color: "red" }}>
              Error! Username or password invalid
            </Form.Label>
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          Admin Login
        </Button>
      </Form>
    </div>
  );
}

export default AdminLogin;
