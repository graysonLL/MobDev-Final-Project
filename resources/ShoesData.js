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
      body: "The original Air Jordan 1 Chicago colorway was first introduced in 1985 and has only been retroed a few times since. But 2022 is the year that the colorway returns with an added vintage look. ",
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
      category: 'converse',
      title: "Converse Chuck Taylor 70s - Low",
      color: "Black/White",
      date: "2013",
      price: "80",
      body: "By 1970, the Chuck Taylor All Star evolved into one of the best basketball sneakers, ever. The Chuck 70 celebrates that heritage by bringing together archival-inspired details with modern comfort updates.",
      key: "7",
      image: images.c1,
      notif: "Brand new Chuck 70s are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'converse',
      title: "Converse Chuck Taylor 70s - High",
      color: "Black/Cream White",
      date: "2013",
      price: "85",
      body: "By 1970, the Chuck Taylor All Star evolved into one of the best basketball sneakers, ever. The Chuck 70 celebrates that heritage by bringing together archival-inspired details with modern comfort updates.",
      key: "8",
      image: images.c2,
      notif: "Brand new Chuck 70 highs are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'converse',
      title: "Converse Star Player 76",
      color: "White/Black Accents",
      date: "05/07/2018",
      price: "120",
      body: "Taking cues from iconic Converse basketball sneakers, the Star Player 76 blends unmistakable Chuck Taylor styling with a padded tongue, leather Star Chevron overlays, and a brick pattern outsole made famous by the Pro Leather.",
      key: "9",
      image: images.c3,
      notif: "Brand new Star Player's are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'converse',
      title: "Converse Chuck Taylor x CDG",
      color: "Black/White/Red",
      date: "2015",
      price: "180",
      body: "The Converse x Comme des Garçons PLAY Chuck 70 features classic Chuck Taylor styling with a playful twist.",
      key: "10",
      image: images.c4,
      notif: "Brand new Star Player's are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'nike',
      title: "Nike Dunk Low Panda",
      color: "Black/White",
      date: "03/10/2021",
      price: "112",
      body: "The Nike Dunk Low Retro White Black (GS) silhouette comes in a stark black and white colorway and is made from premium leather materials throughout.",
      key: "11",
      image: images.n1,
      notif: "Brand new Panda's are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'nike',
      title: "Nike Air Force 1 Low '07",
      color: "Black/White",
      date: "12/09/2017",
      price: "115",
      body: "The Nike Air Force 1 Low White '07 features an all-white leather upper with a perforated toe box and Swoosh overlays. ",
      key: "12",
      image: images.n2,
      notif: "Who doesn't like AF1s!?",
      notifBody: "Cop now!"
    },
    {
      category: 'nike',
      title: "Nike Air Max 97",
      color: "White/Wolf-Gray",
      date: "05/01/2023",
      price: "160",
      body: "This Nike Air Max 97 'OG' edition comes in a white, wolf grey and black colorway. Made to commemorate the 30th Anniversary of the classic Air Max silhouette.",
      key: "13",
      image: images.n3,
      notif: "Blast from the past!",
      notifBody: "Cop now!"
    },
    {
      category: 'nike',
      title: "Nike Blazer Mid 77",
      color: "Summit White/Black",
      date: "03/25/2019",
      price: "100",
      body: "In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team.",
      key: "14",
      image: images.n4,
      notif: "Blast from the past!",
      notifBody: "Cop now!"
    },
    {
      category: 'nike',
      title: "Nike Air Presto",
      color: "White/Dark Gray",
      date: "05/19/2022",
      price: "130",
      body: "With a sleek design that's more comfortable than your favourite T-shirt, the Nike Air Presto is made to feel good and look fast.",
      key: "15",
      image: images.n5,
      notif: "Want shoes for a run?",
      notifBody: "Cop now!"
    },
    {
      category: 'adidas',
      title: "Adidas Samba OG",
      color: "Night Navy/Cream White/Gum",
      date: "04/14/2023",
      price: "100",
      body: "The adidas Samba OG Night Navy Gum is a classic sneaker with a history that dates back as far as the 1950s. The shoe was first designed as a soccer training shoe but has since transitioned into a lifestyle icon.",
      key: "16",
      image: images.a1,
      notif: "New kicks from adidas!",
      notifBody: "Cop now!"
    },
    {
      category: 'adidas',
      title: "Adidas UltraBoost 1.0",
      color: "Black/White",
      date: "2015",
      price: "200",
      body: "From a walk in the park to a weekend run with friends, these adidas Ultraboost 1.0 shoes are designed to keep you comfortable.",
      key: "17",
      image: images.a2,
      notif: "New running shoes?",
      notifBody: "Cop now!"
    },
    {
      category: 'adidas',
      title: "Adidas NMD R1 PrimeKnit",
      color: "Black/White",
      date: "2015",
      price: "250",
      body: "A front-runner on the street-fashion sneaker scene, the NMD borrows from a 1980s heritage racing style for a look that's minimalist and distinctive. ",
      key: "18",
      image: images.a3,
      notif: "New running shoes?",
      notifBody: "Cop now!"
    },
    {
      category: 'adidas',
      title: "Adidas Yeezy Boost 350",
      color: "Black/Black/Black",
      date: "03/05/2022",
      price: "275",
      body: "With a triple black Primeknit upper, the adidas Yeezy 350 V2 Onyx takes it back to the basics, using its muted palette to emphasize the intricacies of its construction. ",
      key: "19",
      image: images.a4,
      notif: "Triple blacks are out!",
      notifBody: "Cop now!"
    },
    {
      category: 'off-white',
      title: "Off-White Air Force 1 Low",
      color: "Black/White-Cone-Black",
      date: "12/19/2018",
      price: "950",
      body: "The force is within you, as Nike uses their very own and release the Air Force 1 Low Off-White Black White.",
      key: "20",
      image: images.o3,
      notif: "Collab Season",
      notifBody: "Cop now!"
    },
    {
      category: 'off-white',
      title: "Off-White Air Force 1 Low",
      color: "White/White-Sail",
      date: "11/01/2017",
      price: "3000",
      body: "This Nike Air Force 1 Low was made in collaboration with Virgil Abloh's Off-White imprint. A part of the 'Ghosting' Series, this pair comes in a clean white and sail colorway.",
      key: "21",
      image: images.o2,
      notif: "Collab Season",
      notifBody: "Cop now!"
    },
    {
      category: 'off-white',
      title: "Off-White Jordan 1 Retro High",
      color: "White/Black-Varsity-Red",
      date: "11/09/2017",
      price: "5000",
      body: "The Off-White x Air Jordan 1 Retro High OG was one of the most highly anticipated footwear collaborations of 2017. ",
      key: "22",
      image: images.o1,
      notif: "Collab Season",
      notifBody: "Cop now!"
    },
    {
      category: 'off-white',
      title: "Off-White VaporMax",
      color: "Black/Black",
      date: "09/09/2017",
      price: "1300",
      body: "The Nike Air VaporMax Off White was the result of a collaboration between the lifestyle brand and the late designer Virgil Abloh",
      key: "23",
      image: images.o4,
      notif: "Collab Season",
      notifBody: "Cop now!"
    },
  ]);

  return shoes;
};

export default ShoesData;
