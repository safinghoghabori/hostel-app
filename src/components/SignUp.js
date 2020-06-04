import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Student Actions
import { studentSignup } from "../redux/students/studentAction";

function SignUp() {
  // const [state, setState] = useState({});
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const signUpDetails = {
      uname: e.target[0].value,
      password: e.target[3].value,
    };

    // Check signUp data is already available or not
    const existing = JSON.parse(localStorage.getItem("signUp"));
    if (!existing) {
      // Make array of object initially
      let arr = [];
      arr.push(signUpDetails);
      console.log("converted into arr", arr);
      // Store data to the localStorage
      localStorage.setItem("signUp", JSON.stringify(arr));
    } else {
      existing.push(signUpDetails);
      console.log("existing", existing);
      localStorage.setItem("signUp", JSON.stringify(existing));
    }
    // Redirect the student to the login page
    history.push("/login");
  };
  return (
    <div>
      <br />
      <h1
        style={{
          background: "#576574",
          color: "#c8d6e5",
          textAlign: "center",
        }}
      >
        Singup
      </h1>
      <div
        style={{
          height: "70vh",
          background: "#c8d6e5",
          width: "50%",
          transform: "translate(50%,0)",
          textAlign: "center",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="John" required />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Doe" required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
