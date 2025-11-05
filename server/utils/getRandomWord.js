import { categories } from "../data/category.js";

const new_names = [
  "camouflage",
  "blackberry",
  "hurricane",
  "rain",
  "squirrel",
  "raccoon",
  "hockey puck",
  "panda",
  "animal migration",
  "blueberry",
  "soccer ball",
  "zebra",
];

export default function getRandomWord(){
    const randomIndex= Math.floor(Math.random()*new_names.length);
    return new_names[randomIndex];
}