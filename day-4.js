/* 1 Multiplication Table */
function generateTable() {
  const num = Number(tableNum.value);
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += `${num} x ${i} = ${num * i}\n`;
  }

  console.log(result);
  tableOutput.textContent = result;
}

/* 2 Sum of Digits */
function sumDigits() {
  let num = Number(digitNum.value);
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  console.log("Sum of digits:", sum);
  digitOutput.textContent = `Sum of digits = ${sum}`;
}

/* 3 Multiples Finder */
function findMultiples() {
  const num = Number(multipleNum.value);
  let result = "";

  for (let i = 1; i <= 100; i++) {
    if (i % num === 0) {
      result += i + " ";
    }
  }

  console.log(result);
  multipleOutput.textContent = result;
}

/* 4 Pattern Generator */
function generatePattern() {
  const rows = Number(patternRows.value);
  let pattern = "";

  for (let i = 1; i <= rows; i++) {
    pattern += "* ".repeat(i) + "\n";
  }

  console.log(pattern);
  patternOutput.textContent = pattern;
}

/* 5 ATM Withdrawal */
let balance = 5000;

function withdrawCash() {
  const amount = Number(withdrawAmt.value);
  let message = "";

  if (amount <= balance) {
    balance -= amount;
    message = `Withdrawal successful.\nBalance: ₹${balance}`;
  } else {
    message = "Insufficient balance!";
  }

  console.log(message);
  atmOutput.textContent = message;
}

/* 6 Shopping Cart */
let cart = [];

function addItem() {
  const name = itemName.value;
  const price = Number(itemPrice.value);

  cart.push({ name, price });
  displayCart();
}

function removeItem() {
  cart.pop();
  displayCart();
}

function displayCart() {
  let total = 0;
  let output = "";

  for (let item of cart) {
    output += `${item.name} - ₹${item.price}\n`;
    total += item.price;
  }

  output += `\nTotal: ₹${total}`;
  console.log(cart, total);
  cartOutput.textContent = output;
}
