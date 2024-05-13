import React from "react";
import { useState } from "react";
import images from "../images/imagesExport";

const ShoesData = () => {
  const [shoes, setShoes] = useState([
    {
      title: "Jordan 1 Retro Chicago",
      color: "White/Red/Black",
      date: "02/01/2024",
      price: "$100",
      body: "bout jordan 1",
      key: "1",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Air Jordan 1 Low",
      color: "White/Beige",
      date: "02/01/2024",
      price: "$ 200",
      body: "Always in, always fresh. The Air Jordan 1 Low sets you up with a piece of Jordan history and heritage that's comfortable all day. Choose your colours, then step out in the iconic profile that's built with a high-end mix of materials and encapsulated Air in the heel.",
      key: "2",
      image: images.j2,
      notif: "Dunks!?",
      notifBody: "Place an order now!"
    },
    {
      title: "Jordan 3",
      color: "temp",
      date: "02/01/2024",
      price: "$300",
      body: "bout jordan 3",
      key: "3",
      image: images.j3,
      notif: "Dunk it, Jonathan!",
      notifBody: "Dunk na!"
    },
    {
      title: "Jordan 4",
      color: "temp",
      date: "02/01/2024",
      price: "$100",
      body: "bout jordan 1",
      key: "4",
      image: images.j4,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Air Jordan 1 Mid",
      color: "White/Black",
      date: "02/01/2024",
      price: "$ 200",
      body: "Never mess with a classic. Keep heritage on your feet with a white-on-white look that will never go out of style.",
      key: "5",
      image: images.j5,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Jordan 6",
      color: "temp",
      date: "02/01/2024",
      price: "$300",
      body: "bout jordan 3",
      key: "6",
      image: images.j6,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Jordan 7",
      color: "temp",
      date: "02/01/2024",
      price: "$100",
      body: "bout jordan 1",
      key: "7",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Jordan 8",
      color: "temp",
      date: "02/01/2024",
      price: "$200",
      body: "bout jordan 2",
      key: "8",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Jordan 9",
      color: "temp",
      date: "02/01/2024",
      price: "$300",
      body: "bout jordan 3",
      key: "9",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
  ]);

  return shoes;
};

export default ShoesData;
