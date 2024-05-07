import React from "react";
import { useState } from "react";
import images from "../images/imagesExport";

const SearchData = () => {
  const [shoes, setShoes] = useState([
    {
      title: "jordan 1",
      price: "100$",
      body: "bout jordan 1",
      category: "jordan",
      key: "1",
      image: images.j1,
    },
    {
      title: "jordan 2",
      price: "200$",
      body: "bout jordan 2",
      category: "jordan",
      key: "2",
      image: images.j2,
    },
    {
      title: "jordan 3",
      price: "300$",
      body: "bout jordan 3",
      category: "jordan",
      key: "3",
      image: images.j3,
    },
    {
      title: "jordan 4",
      price: "100$",
      body: "bout jordan 1",
      category: "jordan",
      key: "4",
      image: images.j4,
    },
    {
      title: "nike 1",
      price: "200$",
      body: "bout jordan 2",
      category: "nike",
      key: "5",
      image: images.j5,
    },
    {
      title: "nike 2",
      price: "300$",
      body: "bout jordan 3",
      category: "nike",
      key: "6",
      image: images.j6,
    },
    {
      title: "adidas 1",
      price: "100$",
      body: "bout jordan 1",
      category: "adidas",
      key: "7",
      image: images.j1,
    },
    {
      title: "adidas 2",
      price: "200$",
      body: "bout jordan 2",
      category: "adidas",
      key: "8",
      image: images.j1,
    },
    {
      title: "nike 9",
      price: "300$",
      body: "bout jordan 3",
      category: "nike",
      key: "9",
      image: images.j1,
    },
  ]);

  return shoes;
};

export default SearchData;
