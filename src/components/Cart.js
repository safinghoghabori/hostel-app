import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function Cart() {
  // To hide card when use cancle the booking
  const [showCard, setShowCard] = useState(true);
  const isBooked = JSON.parse(localStorage.getItem("bookedRoomInfo"));
  const handleCancle = () => {
    console.log("Booking calcled");
    setShowCard(false);
    localStorage.setItem("bookedRoomInfo", "null");
  };
  return (
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
        Your Booked Room
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
              <Button variant="primary" onClick={handleCancle}>
                Cancle Booking
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <h4>No room booked....</h4>
        )}
      </div>
    </div>
  );
}

export default Cart;
