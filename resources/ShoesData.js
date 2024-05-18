import React from "react";
import { useState } from "react";
import images from "../images/imagesExport";

const ShoesData = () => {
  const [shoes, setShoes] = useState([
    {
      category: 'jordan',
      title: "Jordan 1 Retro Chicago",
      color: "White/Red/Black",
      date: "11/19/2022",
      price: "100",
      body: "bout jordan 1",
      key: "1",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'jordan',
      title: "Women's Air Jordan 1 Low",
      color: "White/Beige",
      date: "03/28/2024",
      price: "200",
      body: "Always in, always fresh. The Air Jordan 1 Low sets you up with a piece of Jordan history and heritage that's comfortable all day. Choose your colours, then step out in the iconic profile that's built with a high-end mix of materials and encapsulated Air in the heel.",
      key: "2",
      image: images.j2,
      notif: "Dunks!?",
      notifBody: "Place an order now!"
    },
    {
      category: 'jordan',
      title: "Air Jordan 1 Low 'Dark Grey'",
      color: "Sail/Off Noir-Dark Grey-White",
      date: "03/29/2023",
      price: "300",
      body: "Always in, always fresh. The Air Jordan 1 Low sets you up with a piece of Jordan history and heritage that's comfortable all day. Choose your colors, then step out in the iconic profile that's built with a high-end mix of materials and encapsulated Air in the heel.",
      key: "3",
      image: images.j3,
      notif: "Dunk it, Jonathan!",
      notifBody: "Dunk na!"
    },
    {
      category: 'jordan',
      title: "Kid's Air Jordan 1 Mid SE",
      color: "Anthracite/Sail/Red",
      date: "05/07/2022",
      price: "100",
      body: "The adults in your life might have rules, but they can also inspire some amazing drip. Inspired by the wallpaper in MJ's childhood home, this AJ1 rocks bold florals and colour-blocked canvas.",
      key: "4",
      image: images.j4,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'jordan',
      title: "Air Jordan 1 Mid 'Panda'",
      color: "White/Black",
      date: "06/20/2023",
      price: "200",
      body: "Never mess with a classic. Keep heritage on your feet with a white-on-white look that will never go out of style.",
      key: "5",
      image: images.j5,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'jordan',
      title: "Jordan 1 Retro High Element",
      color: "Sky J Purple/Sail-Black",
      date: "10/14/2023",
      price: "300",
      body: "The Jordan 1 Retro High Element Gore-Tex Sky J Purple takes an iconic silhouette and dresses it in high-tech fabric that gives this sneaker cutting-edge style and unparalleled dependability.",
      key: "6",
      image: images.j6,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'jordan',
      title: "Jordan 7",
      color: "temp",
      date: "02/01/2024",
      price: "100",
      body: "bout jordan 1",
      key: "7",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'nike',
      title: "Jordan 8",
      color: "temp",
      date: "02/01/2024",
      price: "200",
      body: "bout jordan 2",
      key: "8",
      image: images.j1,
      notif: "Brand new Chicago 1s are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'adidas',
      title: "Jordan 9",
      color: "temp",
      date: "02/01/2024",
      price: "300",
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
