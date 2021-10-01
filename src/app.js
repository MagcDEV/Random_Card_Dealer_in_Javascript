/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  //write your code here
  const simbols = ["♣", "♠", "♥", "♦"];
  const cardValue = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "K",
    "Q",
    "J",
    "A"
  ];

  let pickCard = () => {
    let randomSuite = simbols[Math.floor(Math.random() * simbols.length)];
    let randomNumber = cardValue[Math.floor(Math.random() * cardValue.length)];
    document.getElementsByClassName("top-icon")[0].innerHTML = randomSuite;
    document.getElementsByClassName("botton-icon")[0].innerHTML = randomSuite;
    document.getElementsByClassName("card-letter")[0].innerHTML = randomNumber;
    if (randomSuite == "♥") {
      document.getElementsByClassName("top-icon")[0].style.color = "red";
      document.getElementsByClassName("botton-icon")[0].style.color = "red";
    } else {
      document.getElementsByClassName("top-icon")[0].style.color = "black";
      document.getElementsByClassName("botton-icon")[0].style.color = "black";
    }
  };

  pickCard();

  setInterval(function() {
    pickCard();
  }, 10000);
};
