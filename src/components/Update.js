import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

function Update() {
  const param = useParams();
  console.log("params...", typeof param.id);
  const history = useHistory();
  const [specificRoom, setSpecificRoom] = useState([]);

  useEffect(() => {
    const roomData = JSON.parse(localStorage.getItem("rooms"));
    setSpecificRoom(
      roomData.filter((room) => {
        // return room.id == parseInt(param.id);
        if (room.id == param.id) {
          return room;
        }
      })
    );
  }, []);
  console.log("specific room..", specificRoom);

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomData = JSON.parse(localStorage.getItem("rooms"));
    // console.log(roomData);
    const afterUpdatingRoom = roomData.map((room) => {
      if (room.id == param.id) {
        // console.log("hey i m inside onSubmit");
        room.name = e.target[0].value;
        room.price = e.target[1].value;
        room.description = e.target[2].value;
      }
    });
    // Update localStorage after updating the room
    localStorage.setItem("rooms", JSON.stringify(roomData));
    // Redirect the user to the viewBookedRoom page
    history.push("/controlpanel/viewbookedroom");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            defaultValue={specificRoom[0] && specificRoom[0].name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            defaultValue={specificRoom[0] && specificRoom[0].price}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            defaultValue={specificRoom[0] && specificRoom[0].description}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Select Image</Form.Label>
          <Form.Control type="file" name="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
