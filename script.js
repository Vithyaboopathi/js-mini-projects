// Project 1: Multiplication Table Generator
function generateTable() {
  const num = parseInt(document.getElementById("tableNum").value);
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `${num} x ${i} = ${num * i}\n`;
  }
  document.getElementById("tableOutput").innerText = output;
}

// Project 2: Sum of Digits
function sumDigits() {
  const num = document.getElementById("digitNum").value;
  let sum = 0;
  for (let digit of num) {
    sum += parseInt(digit);
  }
  document.getElementById("digitOutput").innerText = `Sum of digits: ${sum}`;
}

// Project 3: Multiples Finder (1-100)
function findMultiples() {
  const num = parseInt(document.getElementById("multipleNum").value);
  let multiples = [];
  for (let i = 1; i <= 100; i++) {
    if (i % num === 0) {
      multiples.push(i);
    }
  }
  document.getElementById(
    "multipleOutput"
  ).innerText = `Multiples of ${num}:\n${multiples.join(", ")}`;
}

// Project 4: Star Pattern Generator
function generatePattern() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += "*".repeat(i) + "\n";
  }
  document.getElementById("patternOutput").innerText = output;
}

// Project 5: ATM Cash Withdrawal
function withdrawCash() {
  let amount = parseInt(document.getElementById("withdrawAmount").value);
  const denominations = [100, 50, 20, 10, 5, 1];
  let result = "Denominations:\n";
  for (let denom of denominations) {
    const count = Math.floor(amount / denom);
    if (count > 0) {
      result += `${denom} x ${count}\n`;
      amount -= denom * count;
    }
  }
  document.getElementById("atmOutput").innerText = result;
}

// Project 6: Shopping Cart
let cart = [];
function addItem() {
  const name = document.getElementById("itemName").value;
  const price = parseFloat(document.getElementById("itemPrice").value);
  cart.push({ name, price });
  displayCart();
}
function removeItem() {
  cart.pop();
  displayCart();
}
function displayCart() {
  let output = "Shopping Cart:\n";
  let total = 0;
  cart.forEach((item, index) => {
    output += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
    total += item.price;
  });
  output += `Total: $${total.toFixed(2)}`;
  document.getElementById("cartOutput").innerText = output;
}
