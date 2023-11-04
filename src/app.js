/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  generar_carta();
};

function generar_carta() {
  let palos = ["♦", "♥", "♠", "♣"];

  let numero = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];

  let paloRadom = palos[Math.floor(Math.random() * palos.length)];

  let numeroRadom = numero[Math.floor(Math.random() * palos.length)];

  // console.log(paloRadom, numeroRadom);

  document.getElementById("palo_i").innerHTML = paloRadom;

  document.getElementById("numero").innerHTML = numeroRadom;

  document.getElementById("palo_d").innerHTML = paloRadom;

  if (paloRadom == "♥" || paloRadom == "♦") {
    document.getElementById("palo_i").style.color = "red";

    document.getElementById("palo_d").style.color = "red";
  }
}

setTimeout(generar_carta, 2000);
