/* =========================
   Project 1: Employee Management
========================= */
function Employee(name, role, salary) {
  this.name = name;
  this.role = role;
  this.salary = salary;
}

const employees = [];

function addEmployee() {
  const name = empName.value;
  const role = empRole.value;
  const salary = Number(empSalary.value);

  employees.push(new Employee(name, role, salary));
  empOutput.innerText = JSON.stringify(employees, null, 2);
}

/* =========================
   Project 2: Library Management
========================= */
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const books = [];

function addBook() {
  books.push(new Book(bookTitle.value, bookAuthor.value, bookYear.value));
  libraryOutput.innerText = JSON.stringify(books, null, 2);
}

/* =========================
   Project 3: Student Record Manager
========================= */
function Student(name, roll, marks) {
  this.name = name;
  this.roll = roll;
  this.marks = marks;
}

Student.prototype.getGrade = function () {
  return this.marks >= 75 ? "A" : this.marks >= 50 ? "B" : "C";
};

const students = [];

function addStudent() {
  const s = new Student(stuName.value, stuRoll.value, Number(stuMarks.value));
  students.push(s);
  studentOutput.innerText = students
    .map((s) => `${s.name} - Grade ${s.getGrade()}`)
    .join("\n");
}

/* =========================
   Project 4: Budget Manager
========================= */
let balance = 0;

function addIncome() {
  balance += Number(amount.value);
  budgetOutput.innerText = "Balance: ₹" + balance;
}

function addExpense() {
  balance -= Number(amount.value);
  budgetOutput.innerText = "Balance: ₹" + balance;
}

/* =========================
   Project 5: Shopping Cart
========================= */
const cart = [];

function addItem() {
  cart.push({
    name: itemName.value,
    price: Number(itemPrice.value),
  });

  cartOutput.innerText = cart
    .map((item) => `${item.name} - ₹${item.price}`)
    .join("\n");
}

/* =========================
   Project 6: Bank Account
========================= */
let bankBalance = 0;

function deposit() {
  bankBalance += Number(bankAmount.value);
  bankOutput.innerText = "Balance: ₹" + bankBalance;
}

function withdraw() {
  const amt = Number(bankAmount.value);
  bankOutput.innerText =
    amt > bankBalance
      ? "Insufficient Balance ❌"
      : "Balance: ₹" + (bankBalance -= amt);
}
