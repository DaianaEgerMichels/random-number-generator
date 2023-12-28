function generateRandomNumber() {
    const minValue = parseInt(document.getElementById("min-value").value);
    const maxValue = parseInt(document.getElementById("max-value").value);

    if (isNaN(minValue) || isNaN(maxValue)) {
      document.getElementById("result").innerHTML = "<span>Please enter valid numbers</span>";
    } else if (minValue >= maxValue) {
      document.getElementById("result").innerHTML = "<span>Min Value should be less than Max Value</span>";
    } else {
      let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      document.getElementById("result").innerHTML = "<span>Number generated: " + randomNumber + "</span>";
    }
  }