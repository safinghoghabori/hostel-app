import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import HeaderImg from "./HeaderImg";
import Room from "./Room";
import { rooms } from "../roomDetails";

function Home() {
  useEffect(() => {
    const checkRooms = JSON.parse(localStorage.getItem("rooms"));
    !checkRooms && localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);
  return (
    <div>
      <NavigationBar />
      <HeaderImg />
      <Room />
    </div>
  );
}

export default Home;
