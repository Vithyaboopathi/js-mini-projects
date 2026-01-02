/* =========================
   Mini Project 1: Username Generator
========================= */
function generateUsername() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();

  if (!fname || !lname) {
    document.getElementById("userOutput").innerText =
      "Please enter both first and last name.";
    return;
  }

  const randomNum = Math.floor(100 + Math.random() * 900);
  const username =
    fname.substring(0, 3).toLowerCase() +
    lname.substring(0, 3).toLowerCase() +
    randomNum;

  document.getElementById("userOutput").innerText =
    "Generated Username: " + username;
}

/* =========================
   Mini Project 2: Palindrome Checker
========================= */
function checkPalindrome() {
  const input = document.getElementById("palInput").value;

  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = cleaned.split("").reverse().join("");

  const result =
    cleaned && cleaned === reversed ? "Palindrome ✅" : "Not a Palindrome ❌";

  document.getElementById("palOutput").innerText = result;
}

/* =========================
   Mini Project 3: Text Reverser
========================= */
function reverseText() {
  const text = document.getElementById("reverseInput").value;
  const reversed = text.split("").reverse().join("");

  document.getElementById("reverseOutput").innerText =
    "Reversed Text: " + reversed;
}

/* =========================
   Mini Project 4: Word Counter
========================= */
function countWords() {
  const sentence = document.getElementById("wordInput").value.trim();

  if (!sentence) {
    document.getElementById("wordOutput").innerText = "Word Count: 0";
    return;
  }

  const words = sentence.split(/\s+/);
  document.getElementById("wordOutput").innerText =
    "Word Count: " + words.length;
}

/* =========================
   Mini Project 5: Email Formatter & Validator
========================= */
function validateEmail() {
  const email = document.getElementById("emailInput").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    document.getElementById("emailOutput").innerText = "Invalid Email ❌";
    return;
  }

  const [username, domain] = email.split("@");

  document.getElementById("emailOutput").innerText = `Valid Email ✅
Username: ${username}
Domain: ${domain}`;
}

/* =========================
   Mini Project 6: Sentence Transformer
========================= */
function transformSentence() {
  const sentence = document.getElementById("sentenceInput").value.trim();

  if (!sentence) {
    document.getElementById("transformOutput").innerText =
      "Please enter a sentence.";
    return;
  }

  const words = sentence.split(/\s+/);

  const capitalized = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const kebabCase = words.join("-").toLowerCase();
  const snakeCase = words.join("_").toLowerCase();

  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b));
  const shortestWord = words.reduce((a, b) => (a.length < b.length ? a : b));

  const output = `
Capitalized: ${capitalized}
Total Words: ${words.length}
Total Characters: ${sentence.length}
Kebab Case: ${kebabCase}
Snake Case: ${snakeCase}
Longest Word: ${longestWord}
Shortest Word: ${shortestWord}
  `;

  document.getElementById("transformOutput").innerText = output;
}
