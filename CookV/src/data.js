// src/data.js

// Import your images from the assets folder
import biryaniImg from "./assets/download.jpeg";
import paneerImg from "./assets/download.jpeg";
import pastaImg from "./assets/download.jpeg";
import tacosImg from "./assets/download.jpeg";
import sushiImg from "./assets/download.jpeg";
import dosaImg from "./assets/download.jpeg";
import ramenImg from "./assets/download.jpeg";

const recipes = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with spiced chicken.",
    image: biryaniImg,
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Creamy tomato gravy with soft paneer cubes.",
    image: paneerImg,
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    description: "Rich and creamy white sauce pasta.",
    image: pastaImg,
  },
  {
    id: 4,
    name: "Classic Tacos",
    description: "Spiced ground meat in a crispy corn tortilla.",
    image: tacosImg,
  },
  {
    id: 5,
    name: "Sushi Platter",
    description: "Assorted fresh sushi rolls with wasabi and soy.",
    image: sushiImg,
  },
  {
    id: 6,
    name: "Masala Dosa",
    description: "Crispy rice crepe with a savory potato filling.",
    image: dosaImg,
  },
  {
    id: 7,
    name: "Spicy Ramen",
    description: "Flavorful noodle soup with a rich, spicy broth.",
    image: ramenImg,
  },
];

export default recipes;
