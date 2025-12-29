/* 1 Login */
function login() {
  const storedUser = "admin";
  const storedPass = "1234";

  const user = loginUser.value;
  const pass = loginPass.value;

  let message =
    user === storedUser && pass === storedPass
      ? "Login Successful"
      : "Invalid Credentials";

  console.log(message);
  loginOutput.textContent = message;
}

/* 2 Traffic Light */
function trafficRule() {
  const color = trafficColor.value.toLowerCase();
  let rule = "";

  if (color === "red") rule = "Stop!";
  else if (color === "yellow") rule = "Slow down!";
  else if (color === "green") rule = "Go!";
  else rule = "Invalid color!";

  console.log(rule);
  trafficOutput.textContent = rule;
}

/* 3 Number Guessing */
function guessNumber() {
  const random = Math.floor(Math.random() * 10) + 1;
  const userGuess = Number(guessNum.value);

  let result =
    userGuess === random
      ? "Correct Guess 🎉"
      : `Wrong Guess ❌ Number was ${random}`;

  console.log(result);
  guessOutput.textContent = result;
}

/* 4 Age Eligibility */
function checkEligibility() {
  const age = Number(eligibilityAge.value);
  let message = "";

  if (age >= 25) message = "Eligible to vote, drink alcohol, and rent a car";
  else if (age >= 21) message = "Eligible to vote and drink alcohol";
  else if (age >= 18) message = "Eligible to vote";
  else message = "Not eligible for these activities";

  console.log(message);
  ageOutput.textContent = message;
}

/* 5 Grading System */
function gradeStudent() {
  const marks = Number(document.getElementById("marks").value);
  let grade = "";
  let remark = "";

  if (marks >= 90) {
    grade = "A+";
    remark = "Excellent";
  } else if (marks >= 80) {
    grade = "A";
    remark = "Good";
  } else if (marks >= 70) {
    grade = "B";
    remark = "Average";
  } else if (marks >= 60) {
    grade = "C";
    remark = "Poor";
  } else {
    grade = "F";
    remark = "Fail";
  }

  console.log(grade, remark);
  gradeOutput.textContent = `Grade: ${grade}\nRemark: ${remark}`;
}

/* 6 Rock Paper Scissors */
function playGame() {
  const choices = ["rock", "paper", "scissors"];
  const player = playerChoice.value.toLowerCase();
  const computer = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (player === computer) result = "It's a Tie 🤝";
  else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  )
    result = "You Win 🎉";
  else result = "Computer Wins 💻";

  console.log(player, computer, result);
  gameOutput.textContent = `Player: ${player}\nComputer: ${computer}\nResult: ${result}`;
}
