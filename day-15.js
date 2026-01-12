// ---------- 1. Registration ----------
function registerUser() {
  try {
    let name = regName.value;
    let email = regEmail.value;
    if (!name || !email) throw "All fields required";
    if (!email.includes("@")) throw "Invalid email";
    regError.textContent = "Registered Successfully";
  } catch (e) {
    regError.textContent = e;
  }
}

// ---------- 2. API Logger ----------
async function fetchAPI() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await res.json();
    localStorage.setItem("apiSuccess", JSON.stringify(data));
    apiStatus.textContent = "API Success Logged";
  } catch (err) {
    localStorage.setItem("apiError", err);
  }
}

// ---------- 3. Calculator ----------
function divide() {
  try {
    let a = +num1.value;
    let b = +num2.value;
    if (b === 0) throw "Cannot divide by zero";
    calcResult.textContent = a / b;
  } catch (e) {
    calcResult.textContent = e;
  }
}

// ---------- 4. Debug Dashboard ----------
function showLogs() {
  let error = localStorage.getItem("apiError");
  console.error(error);
  debugLogs.textContent = error || "No Errors Logged";
}

// ---------- 5. Custom Form Errors ----------
class InvalidEmailError extends Error {}
class WeakPasswordError extends Error {}

function validateForm() {
  try {
    if (!vName.value) throw "Name required";
    let age = +vAge.value;
    if (age < 18 || age > 100) throw "Invalid Age";
    if (!vEmail.value.includes("@"))
      throw new InvalidEmailError("Invalid Email");
    if (vPassword.value.length < 6)
      throw new WeakPasswordError("Weak Password");
    formError.textContent = "Form Valid";
  } catch (e) {
    formError.textContent = e.message || e;
  }
}

// ---------- 6. Logger ----------
let logs = [];

function addLog() {
  let msg = logMsg.value;
  let type = logType.value;
  let entry = { msg, type, time: new Date().toLocaleTimeString() };
  logs.push(entry);

  console[type](msg);
  logOutput.textContent = JSON.stringify(logs, null, 2);
}
