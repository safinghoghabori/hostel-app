import React from "react";
import { Form, Button } from "react-bootstrap";
import uuid from "uuid/dist/v1";
import { useHistory } from "react-router-dom";

function AddRoom() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get image path from localStorage
    const imagePath = localStorage.getItem("newImagePath");

    const newRoomData = {
      id: uuid(),
      name: e.target[0].value,
      price: e.target[1].value,
      description: e.target[2].value,
      image: imagePath,
      booked: false,
    };
    var existing = JSON.parse(localStorage.getItem("rooms"));
    existing.push(newRoomData);
    localStorage.setItem("rooms", JSON.stringify(existing));

    // Redirect the admin to the control panel
    history.push("/controlpanel/viewbookedroom");
  };
  const onChange = (e) => {
    // File handleing
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      // The file's text will be printed here
      const fileLink = e.target.result;
      localStorage.setItem("newImagePath", fileLink);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div style={{ height: "72vh", background: "#1dd1a1" }}>
      <br />
      <h1 style={{ background: "#10ac84", color: "#111", textAlign: "center" }}>
        Add New Room
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Select Image</Form.Label>
          <Form.Control type="file" name="file" onChange={onChange} />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddRoom;
