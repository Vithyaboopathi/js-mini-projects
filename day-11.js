/* 1. Stopwatch */
let time = Number(sessionStorage.getItem("time")) || 0;
let interval;
const timeEl = document.getElementById("time");
timeEl.textContent = time;

function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      time++;
      sessionStorage.setItem("time", time);
      timeEl.textContent = time;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  time = 0;
  sessionStorage.setItem("time", 0);
  timeEl.textContent = 0;
}

/* 2. Notes App */
let notes = JSON.parse(localStorage.getItem("notes")) || [];
const notesList = document.getElementById("notesList");

function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((n, i) => {
    const li = document.createElement("li");
    li.textContent = n;
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => {
      notes.splice(i, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes();
    };
    li.appendChild(btn);
    notesList.appendChild(li);
  });
}

function addNote() {
  const val = document.getElementById("noteInput").value;
  if (val) {
    notes.push(val);
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("noteInput").value = "";
    renderNotes();
  }
}
renderNotes();

/* 3. To-Do */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t.text;
    if (t.done) li.classList.add("completed");
    li.onclick = () => {
      t.done = !t.done;
      saveTasks();
    };
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = (e) => {
      e.stopPropagation();
      tasks.splice(i, 1);
      saveTasks();
    };
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function addTask() {
  const val = document.getElementById("taskInput").value;
  if (val) {
    tasks.push({ text: val, done: false });
    document.getElementById("taskInput").value = "";
    saveTasks();
  }
}
renderTasks();

/* 4. Survey */
function saveSurvey() {
  const data = {
    name: name.value,
    age: age.value,
    rating: rating.value,
    comments: comments.value,
  };
  localStorage.setItem("survey", JSON.stringify(data));
}

const savedSurvey = JSON.parse(localStorage.getItem("survey"));
if (savedSurvey) {
  name.value = savedSurvey.name;
  age.value = savedSurvey.age;
  rating.value = savedSurvey.rating;
  comments.value = savedSurvey.comments;
}

/* 5. Cart */
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Headphones", price: 2000 },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - ₹${p.price}`;
    const btn = document.createElement("button");
    btn.textContent = "Add";
    btn.onclick = () => {
      cart.push(p);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    };
    li.appendChild(btn);
    productList.appendChild(li);
  });
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((c, i) => {
    total += c.price;
    const li = document.createElement("li");
    li.textContent = `${c.name} - ₹${c.price}`;
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => {
      cart.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    };
    li.appendChild(btn);
    cartList.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

function searchProducts() {
  const val = search.value.toLowerCase();
  renderProducts(products.filter((p) => p.name.toLowerCase().includes(val)));
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

renderProducts(products);
renderCart();

/* 6. Expense Tracker */
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;
  expenses.forEach((e, i) => {
    total += e.amount;
    const li = document.createElement("li");
    li.textContent = `${e.name} - ₹${e.amount}`;
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => {
      expenses.splice(i, 1);
      saveExpenses();
    };
    li.appendChild(btn);
    expenseList.appendChild(li);
  });
  expenseTotal.textContent = total;
}

function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}

function addExpense() {
  const name = expenseName.value;
  const amount = Number(expenseAmount.value);
  if (name && amount) {
    expenses.push({ name, amount });
    expenseName.value = "";
    expenseAmount.value = "";
    saveExpenses();
  }
}

renderExpenses();
