// import uuid from "uuid/dist/v3";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

export const rooms = [
  {
    id: 1,
    name: "room1",
    price: 500,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore mollitia magni necessitatibus id fugit similique rerum nesciunt sit autem.",
    image: img1,
    booked: false,
  },
  {
    id: 2,
    name: "room2",
    price: 700,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore mollitia magni necessitatibus id fugit similique rerum nesciunt sit autem.",
    image: img2,
    booked: false,
  },
  {
    id: 3,
    name: "room3",
    price: 800,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore mollitia magni necessitatibus id fugit similique rerum nesciunt sit autem.",
    image: img3,
    booked: false,
  },
  {
    id: 4,
    name: "room4",
    price: 500,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore mollitia magni necessitatibus id fugit similique rerum nesciunt sit autem.",
    image: img4,
    booked: false,
  },
  {
    id: 5,
    name: "room5",
    price: 1000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore mollitia magni necessitatibus id fugit similique rerum nesciunt sit autem.",
    image: img5,
    booked: false,
  },
];
//Store the rooms into localStorage
// localStorage.setItem("rooms", JSON.stringify(rooms));
