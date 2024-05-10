import React from "react";
import { useState } from "react";
import images from "../images/imagesExport";

const ShoesData = () => {
  const [shoes, setShoes] = useState([
    {
      title: "Jordan 1",
      price: "100$",
      body: "bout jordan 1",
      key: "1",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Air Jordan 1 Low - White/Beige",
      price: "200$",
      body: "bout jordan 2",
      key: "2",
      image: images.j2,
      notif: "Dunks!?",
      notifBody: "Place an order now!"
    },
    {
      title: "Jordan 3",
      price: "300$",
      body: "bout jordan 3",
      key: "3",
      image: images.j3,
      notif: "Dunk it, Jonathan!",
      notifBody: "Dunk na!"
    },
    {
      title: "Jordan 4",
      price: "100$",
      body: "bout jordan 1",
      key: "4",
      image: images.j4,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Jordan 5",
      price: "200$",
      body: "bout jordan 2",
      key: "5",
      image: images.j5,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Jordan 6",
      price: "300$",
      body: "bout jordan 3",
      key: "6",
      image: images.j6,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Jordan 7",
      price: "100$",
      body: "bout jordan 1",
      key: "7",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Jordan 8",
      price: "200$",
      body: "bout jordan 2",
      key: "8",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      title: "Jordan 9",
      price: "300$",
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
