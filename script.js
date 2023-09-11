let inputEl = document.getElementById("input-el");
let lengthConversion = document.getElementById("output1");
let volumeConversion = document.getElementById("output2");
let massConversion = document.getElementById("output3");
const btnEl = document.getElementById("btn-el");

btnEl.addEventListener("click", function () {
  renderLength(inputEl.value);
  renderVolume(inputEl.value);
  renderMass(inputEl.value);
  inputEl.value = "";
});

function renderLength(length) {
  let meterTofeet = (length * 39.37).toFixed(2);
  let feetTometer = (length / 39.37).toFixed(2);
  lengthConversion.innerHTML = `${length} meters = ${meterTofeet} feet | ${length} feet = ${feetTometer} meters`;
}
function renderVolume(volume) {
  let litersTogallons = (volume / 3.785).toFixed(2);
  let gallonsToliters = (volume * 3.785).toFixed(2);
  volumeConversion.innerHTML = `${volume} liters  = ${litersTogallons} gallons  | ${volume} gallons  = ${gallonsToliters} liters`;
}
function renderMass(mass) {
  let kgTopounds = (mass * 2.205).toFixed(2);
  let poundsTokg = (mass / 2.205).toFixed(2);
  massConversion.innerHTML = `${mass} kilos  = ${kgTopounds} pounds  | ${mass} pounds  = ${poundsTokg} kilos`;
}
