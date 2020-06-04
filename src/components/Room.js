import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

function Room() {
  const [alert, setAlert] = useState(false);
  const [bookedAlert, setBookedAlert] = useState(false);
  const [btnText, setBtnText] = useState("Book Now!");
  const [hasUpdated, setHasUpdated] = useState(false);
  const [bookingRooms, setBookingRooms] = useState(
    JSON.parse(localStorage.getItem("rooms"))
  );
  // const rooms = JSON.parse(localStorage.getItem("rooms"));
  // console.log(rooms);
  useEffect(() => {
    if (hasUpdated) return;
    if (bookingRooms != null) {
      const rooms = bookingRooms.map((room) => ({
        ...room,
        btnText: "Book Now",
      }));
      setBookingRooms(rooms);
    }
    setHasUpdated(true);
  }, [bookingRooms, hasUpdated]);

  const handleBookNow = (id) => {
    const isLogin = localStorage.getItem("login");
    const isBooked = JSON.parse(localStorage.getItem("bookedRoomInfo"));

    // Check if user is login
    if (isLogin === "true") {
      // Check if room is already booked
      if (isBooked === "null" || isBooked === null) {
        // Check which btn is clicked
        const bookedArray = bookingRooms.filter((room) => id === room.id);

        const bookedRoomInfo = {
          id: bookedArray[0].id,
          name: bookedArray[0].name,
          price: bookedArray[0].price,
          image: bookedArray[0].image,
          description: bookedArray[0].description,
        };

        const rooms = bookingRooms.map((room) => ({
          ...room,
          btnText: id === room.id ? "Booked..." : "Book Now",
        }));

        // remain permenetly book now btn
        // const rooms =

        localStorage.setItem("bookedRoomInfo", JSON.stringify(bookedRoomInfo));
        setBtnText("Booked....");
        setBookingRooms(rooms);
      } else {
        setBookedAlert(true);
        console.log("You already booked the room");
      }
    } else {
      setAlert(true);
    }
  };
  let isBooked = JSON.parse(localStorage.getItem("bookedRoomInfo"));
  isBooked == null ? (isBooked = "*") : (isBooked = isBooked);

  return (
    <div style={{ background: "#c8d6e5", textAlign: "center" }}>
      <hr />
      <h1 style={{ background: "#576574", color: "#c8d6e5" }}>
        Available Rooms:
      </h1>
      <hr />
      {alert && (
        <Alert variant="danger">
          You are not eligible to book the room! Login first...
        </Alert>
      )}
      {bookedAlert && (
        <Alert variant="danger">You already booked the room.</Alert>
      )}
      <StyledGrid>
        <StyledGridContent>
          {bookingRooms &&
            bookingRooms.map((room) => (
              <Card key={room.id}>
                <img src={room.image} alt={room.name} height="250" />
                <Card.Body>
                  <Card.Title>{room.name}</Card.Title>
                  <Card.Text>{room.description}</Card.Text>
                  <span>Price: {room.price}</span>
                  {isBooked.id !== room.id ? (
                    <Button
                      variant="primary"
                      onClick={() => handleBookNow(room.id)}
                    >
                      {room.btnText}
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => handleBookNow(room.id)}
                    >
                      Booked...
                    </Button>
                  )}
                </Card.Body>
              </Card>
            ))}
        </StyledGridContent>
      </StyledGrid>
    </div>
  );
}

export default Room;
