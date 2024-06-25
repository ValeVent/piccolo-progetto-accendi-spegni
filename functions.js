const ACCENDI = "Accendi";
const SPEGNI = "Spegni";

const lampadina = document.querySelector("img");
const pulsante = document.querySelector("button");
pulsante.textContent = ACCENDI;

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    accendiSpegni();
  }
});

pulsante.addEventListener("click", accendiSpegni);

function accendiSpegni() {
  if (pulsante.textContent === ACCENDI) {
    lampadina.src = "media/bulbOn.svg";
    pulsante.textContent = SPEGNI;
  } else {
    lampadina.src = "media/bulbOff.svg";
    pulsante.textContent = ACCENDI;
  }
}
