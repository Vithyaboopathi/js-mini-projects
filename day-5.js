/* 1 Student Grade Calculator */
function calculateGrade() {
  const marks = [Number(m1.value), Number(m2.value), Number(m3.value)];

  const total = marks.reduce((a, b) => a + b, 0);
  const avg = total / marks.length;

  let grade = "";
  if (avg >= 90) grade = "A";
  else if (avg >= 75) grade = "B";
  else if (avg >= 50) grade = "C";
  else grade = "F";

  console.log(total, avg, grade);
  gradeOutput.textContent = `Total: ${total}\nAverage: ${avg.toFixed(
    2
  )}\nGrade: ${grade}`;
}

/* 2 Grocery List */
let groceryList = [];

function addGrocery() {
  groceryList.push(groceryItem.value);
  displayGrocery();
}

function removeGrocery() {
  groceryList = groceryList.filter((item) => item !== groceryItem.value);
  displayGrocery();
}

function displayGrocery() {
  console.log(groceryList);
  groceryOutput.textContent = groceryList.join(", ");
}

/* 3 Tip Calculator */
function calculateTip(bill, percent) {
  return (bill * percent) / 100;
}

function calculateTotal(bill, tip) {
  return bill + tip;
}

function calculateTipUI() {
  const bill = Number(billAmount.value);
  const percent = Number(tipPercent.value);

  const tip = calculateTip(bill, percent);
  const total = calculateTotal(bill, tip);

  console.log(tip, total);
  tipOutput.textContent = `Tip: ₹${tip}\nTotal Bill: ₹${total}`;
}

/* 4 To-Do List */
let tasks = [];

function addTask() {
  tasks.push(taskInput.value);
  console.log("Task Added");
}

function viewTasks() {
  console.log(tasks);
  todoOutput.textContent = tasks.join("\n");
}

function deleteTask() {
  tasks.pop();
  console.log("Task Removed");
  todoOutput.textContent = tasks.join("\n");
}

/* 5 Bill Splitting */
function splitBill() {
  const bill = Number(totalBill.value);
  const people = Number(peopleCount.value);

  const perPerson = bill / people;

  console.log(perPerson);
  splitOutput.textContent = `Each person pays ₹${perPerson.toFixed(2)}`;
}

/* 6 Shopping Cart */
let cart = [];

function addToCart() {
  cart.push({
    name: cartItem.value,
    price: Number(cartPrice.value),
  });
  displayCart();
}

function removeFromCart() {
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
