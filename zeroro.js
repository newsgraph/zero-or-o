
  const replacements = {
  "i": "small-EYE",
  "0": "ZERO",
  "1": "ONE",
  "l": "small-ALE",
  "o": "small-OH",
  "I": "capital-EYE",
  "O": "capital-OH"
};



function myFunction() {
  var ortext = document.getElementById("fname").value;
  const inputSplit = ortext.split("");
  for (let i = 0; i < inputSplit.length; i++) {
    const element = inputSplit[i];
    if (replacements.hasOwnProperty(element)) {
      inputSplit[i] = replacements[element];
    }
  }
  document.getElementById("output").innerHTML = inputSplit;
}
