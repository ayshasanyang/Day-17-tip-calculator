function calculateTip() {
  let billAmount = parseFloat(document.getElementById("billAmount").value);
  let tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value
  );
  let numPeople = parseInt(document.getElementById("numPeople").value);

  if (
    isNaN(billAmount) ||
    isNaN(tipPercentage) ||
    isNaN(numPeople) ||
    numPeople <= 0
  ) {
    document.getElementById("tipResult").innerHTML =
      "Please enter valid inputs.";
    return;
  }

  let tipAmount = (billAmount * (tipPercentage / 100)) / numPeople;
  let totalAmount = billAmount / numPeople + tipAmount;

  document.getElementById(
    "tipResult"
  ).innerHTML = `Each person should tip: <strong>$${tipAmount.toFixed(
    2
  )}</strong><br>
                Total per person: <strong>$${totalAmount.toFixed(2)}</strong>`;
}
