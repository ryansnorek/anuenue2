import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


export const data = {
  one: {
    name: "Chonky Chip",
    id: 420,
    keyDescription: "Chewy, salty",
    sweet: 6,
    salty: 8,
    chewy: 9,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHht10jGyrUz2JIRZhOF0TNN-7bTNLyCPhmQ&usqp=CAU",
    sizes: ["small"],
    description:
      "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
    clicks: 0,
      quantity: 0,
      price: 3,
  },
  two: {
    name: "All Your Bread Are Belong To Us",
    id: 421,
    keyDescription: "Chewy, dense",
    sweet: 2,
    salty: 2,
    chewy: 6,
    img:
      "images/bread.jpg",
    sizes: ["small"],
    description:
      "Eat it raw or toast it with boysenberry jelly exclusively. Other jellies are not our jam. Or have a slice with avocado and disappoint your parents.",
    clicks: 0,
      quantity: 0,
      price: 7,
  },
  three: {
    name: "Based Brownies",
    id: 422,
    keyDescription: "Dense, dark, satiating",
    sweet: 5,
    salty: 5,
    chewy: 9,
    img:
      "https://glutenfreeonashoestring.com/wp-content/uploads/2017/09/Fudgy-Gluten-Free-Brownies-stack.jpg",
    sizes: ["small"],
    description:
      "Almond butter based brownies to nourish your body and superiority. Paleo and gluten free.",
    clicks: 0,
      quantity: 0,
      price: 4,
  },
  four: {
    name: "Champ's Elycakes",
    id: 423,
    keyDescription: "Delicate, floral, airy",
    sweet: 6,
    salty: 3,
    chewy: 1,
    img:
      "images/cake.jpeg",
    sizes: ["small"],
    description:
      "Fake sophistication and orgasms pair well with our champagne cake. Eat with a tiny fork and an upturned nose.",
    clicks: 0,
      quantity: 0,
      price: 6,
  },
  five: {
    name: "Power Bitch Balls",
    id: 425,
    keyDescription: "Chewy, scrumcious",
    sweet: 2,
    salty: 3,
    chewy: 9,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZKIBeDLUdOn6VmBAu8Yphfl9O_H0ii8UAQ&usqp=CAU",
    sizes: ["small"],
    description:
      "Be prepared for a hot date. Infused with maca powder so you're certain to impress your partner with your virility",
    clicks: 0,
      quantity: 0,
      price: 10,
  },
  six: {
    name: "Green Brrrrito",
    id: 426,
    keyDescription: "Yummy",
    sweet: 0,
    salty: 5,
    chewy: 2,
    img:
      "images/burrito.jpg",
    sizes: ["small"],
    description:
      "Fed up with your current debts? We've got you covered. All green shit and eggs and cheese and green salsa. No substitutions.",
    clicks: 0,
      quantity: 0,
      price: 8,
  },
  seven: {
    name: "They Cookies",
    id: 427,
    keyDescription: "Crumbly, politically correct",
    sweet: 6,
    salty: 3,
    chewy: 6,
    img:
      "images/they.jpg",
    sizes: ["small"],
    description:
      "Cis gendered beings not allowed. These anuenue allies are crumbly, to remind you to do your part to crumble the patriarchy.",
    clicks: 0,
      quantity: 0,
      price: 10,
  },
};

