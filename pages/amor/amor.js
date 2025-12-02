import { cardComponent } from "../../components/card.js";

fetch("../../data/momentos.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("contenedor-momentos").innerHTML =
      data.amormio.map(m => cardComponent(m)).join("");
  });
