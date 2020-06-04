import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      uname: e.target[0].value,
      password: e.target[1].value,
    };
    // Get value from the localStorage
    const signUpData = JSON.parse(localStorage.getItem("signUp"));
    const isLogin = localStorage.getItem("login");

    // Loop over the Signup array
    signUpData &&
      signUpData.map((studentSignUp) => {
        if (
          student.uname == studentSignUp.uname &&
          student.password == studentSignUp.password
        ) {
          localStorage.setItem("login", "true");
          history.push("/");
        } else {
          setError(true);
        }
      });
  };

  // Fetch student from localStorage to check whether he is login or not
  const isStudentLogin = localStorage.getItem("login");
  if (isStudentLogin === "true") {
    history.push("/");
  }

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
        Login
      </h1>
      <div
        style={{
          height: "40vh",
          background: "#c8d6e5",
          width: "50%",
          transform: "translate(50%,0)",
          textAlign: "center",
        }}
      >
        <Form onSubmit={handleSubmit}>
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
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
