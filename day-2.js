/* 1 Voting Eligibility */
function checkVoting() {
  let age = Number(voteAge.value);
  let citizen = voteCountry.value;

  let result =
    age >= 18 && citizen === "India"
      ? "Eligible to Vote"
      : "Not Eligible to Vote";

  console.log(result);
  voteOutput.textContent = result;
}

/* 2 Temperature Converter */
function convertTemp() {
  let celsius = Number(document.getElementById("celsius").value);
  let fahrenheit = (celsius * 9) / 5 + 32;

  console.log(`Fahrenheit: ${fahrenheit}`);
  tempOutput.textContent = `${celsius}°C = ${fahrenheit}°F`;
}

/* 3 Discount Calculator */
function calculateDiscount() {
  let price = Number(document.getElementById("price").value);
  let discount = Number(document.getElementById("discount").value);

  let finalPrice = price - (price * discount) / 100;

  console.log(`Final Price: ₹${finalPrice}`);
  discountOutput.textContent = `Original Price: ₹${price}\nDiscount: ${discount}%\nFinal Price: ₹${finalPrice}`;
}

/* 4 Age Verification */
function verifyAge() {
  let userAge = Number(signupAge.value);
  let message = userAge >= 18 ? "Access Granted" : "Access Denied";

  console.log(message);
  ageOutput.textContent = message;
}

/* 5 Bill Splitter */
function splitBill() {
  let bill = Number(document.getElementById("bill").value);
  let people = Number(document.getElementById("people").value);
  let tip = Number(document.getElementById("tip").value);

  let tipAmount = (bill * tip) / 100;
  let total = bill + tipAmount;
  let perPerson = total / people;

  console.log({ tipAmount, total, perPerson });

  billOutput.textContent = `Tip: ₹${tipAmount}\nTotal Bill: ₹${total}\nEach Person Pays: ₹${perPerson}`;
}

/* 6 BMI Calculator */
function calculateBMI() {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);

  let bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  console.log(`BMI: ${bmi}, Category: ${category}`);
  bmiOutput.textContent = `BMI: ${bmi.toFixed(2)}\nCategory: ${category}`;
}
