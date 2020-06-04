import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { StyledGridContent, StyledGrid } from "../styles/StyledGrid";

function ViewBookedRoom() {
  // To hide card when use cancle the booking
  const [showCard, setShowCard] = useState(true);

  // To delete the card as admin delete it
  const [roomsState, setRoomsState] = useState([]);

  // Show model when user click on Update btn
  const [showModel, setShowModel] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Fetch the room details from localStorage
    const rooms = JSON.parse(localStorage.getItem("rooms"));
    setRoomsState(rooms);
  }, []);

  const isBooked = JSON.parse(localStorage.getItem("bookedRoomInfo"));
  const handleCancle = () => {
    console.log("Booking calcled");
    setShowCard(false);
    localStorage.setItem("bookedRoomInfo", "null");
  };

  const handleUpdate = (id) => {
    history.push(`/controlpanel/viewbookedroom/update/${id}`);
  };

  const handleDelete = (id) => {
    console.log("del id..", id);
    const afterDeleteRoomes = roomsState.filter((room) => room.id !== id);
    setRoomsState(afterDeleteRoomes);
  };
  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(roomsState));
  }, [roomsState]);

  return (
    <>
      <div>
        <br />
        <h1
          style={{
            background: "#576574",
            color: "#c8d6e5",
            width: "50%",
            transform: "translate(50%,0)",
            textAlign: "center",
          }}
        >
          Student's Booked Room
        </h1>
        <div
          style={{
            background: "#01a3a4",
            textAlign: "center",
          }}
        >
          {showCard && isBooked !== null ? (
            <Card style={{ width: "18rem" }} key={isBooked.id}>
              <img src={isBooked.image} alt={isBooked.name} height="250" />
              <Card.Body>
                <Card.Title>{isBooked.name}</Card.Title>
                <Card.Text>{isBooked.description}</Card.Text>
                <span>Price: {isBooked.price}</span>
                <br />
                <Button variant="danger" onClick={handleCancle}>
                  Cancle Booking
                </Button>
                <br />
              </Card.Body>
            </Card>
          ) : (
            <h4>No room booked....</h4>
          )}
        </div>
      </div>
      <div>
        <br />
        <h1
          style={{
            background: "#576574",
            color: "#c8d6e5",
            width: "50%",
            transform: "translate(50%,0)",
            textAlign: "center",
          }}
        >
          All Rooms
        </h1>
        <div
          style={{
            background: "#01a3a4",
            textAlign: "center",
          }}
        >
          <StyledGrid>
            <StyledGridContent>
              {roomsState.map((room) => (
                <Card key={room.id}>
                  <img src={room.image} alt={room.name} height="250" />
                  <Card.Body>
                    <Card.Title>{room.name}</Card.Title>
                    <Card.Text>{room.description}</Card.Text>
                    <span>Price: {room.price}</span>
                    <Button
                      variant="primary"
                      onClick={() => handleUpdate(room.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(room.id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </StyledGridContent>
          </StyledGrid>
        </div>
      </div>
    </>
  );
}
export default ViewBookedRoom;
