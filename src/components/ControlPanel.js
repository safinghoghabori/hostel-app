import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function ControlPanel() {
  const history = useHistory();
  const handleViewBookedRoom = () => {
    history.push("/controlpanel/viewbookedroom");
  };
  const handleAddRoom = () => {
    history.push("/controlpanel/addroom");
  };
  const handleLogout = () => {
    localStorage.setItem("adminDetails", null);
    history.push("/");
  };
  return (
    <div>
      <div
        style={{
          background: "#c8d6e5",
          textAlign: "center",
        }}
      >
        <hr />
        <h1 style={{ background: "#576574", color: "#c8d6e5" }}>Actions:</h1>
        <hr />
        <Button variant="danger" onClick={handleViewBookedRoom}>
          View Booked Roomes
        </Button>
        <br />
        <br />
        <Button variant="danger" onClick={handleAddRoom}>
          Add Rooms
        </Button>
        <br />
        <br />
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
        <br />
        <br />
      </div>
    </div>
  );
}

export default ControlPanel;
