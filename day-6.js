/* ===== Mini Project 1 ===== */
const movies = ["Avatar", "Inception", "Interstellar", "Jawan"];

function bookMovie() {
  const name = movieInput.value;
  const msg = movies.includes(name)
    ? "Ticket booked 🎉"
    : "Movie not available ❌";
  movieOutput.textContent = msg;
  console.log("Movie Booking:", msg);
}

/* ===== Mini Project 2 ===== */
let inventory = [];

function addProduct() {
  inventory.push({ name: prodName.value, quantity: prodQty.value });
  updateInventory();
}

function removeProduct() {
  inventory = inventory.filter((p) => p.name !== prodName.value);
  updateInventory();
}

function updateInventory() {
  inventoryOutput.textContent = JSON.stringify(inventory, null, 2);
  console.log("Inventory:", inventory);
}

/* ===== Mini Project 3 ===== */
let books = [
  { title: "JS Basics", author: "John", isBorrowed: false },
  { title: "React Guide", author: "Anna", isBorrowed: false },
];

function borrowBook() {
  books.forEach((b) => {
    if (b.title === bookTitle.value) b.isBorrowed = true;
  });
  showBorrowed();
}

function returnBook() {
  books.forEach((b) => {
    if (b.title === bookTitle.value) b.isBorrowed = false;
  });
  showBorrowed();
}

function showBorrowed() {
  const borrowed = books.filter((b) => b.isBorrowed);
  libraryOutput.textContent = JSON.stringify(borrowed, null, 2);
  console.log("Borrowed Books:", borrowed);
}

/* ===== Mini Project 4 ===== */
let employees = [];

function addEmployee() {
  employees.push({
    name: empName.value,
    role: empRole.value,
    salary: Number(empSalary.value),
  });
  showEmployeeStats();
}

function removeEmployee() {
  employees = employees.filter((e) => e.name !== empName.value);
  showEmployeeStats();
}

function showEmployeeStats() {
  const avgSalary =
    employees.reduce((sum, e) => sum + e.salary, 0) / (employees.length || 1);
  const roles = [...new Set(employees.map((e) => e.role))];

  employeeOutput.textContent =
    `Employees:\n${JSON.stringify(employees, null, 2)}\n\n` +
    `Average Salary: ${avgSalary}\nRoles: ${roles.join(", ")}`;

  console.log("Employees:", employees);
}

/* ===== Mini Project 5 ===== */
function showSimpleInventory() {
  simpleInventoryOutput.textContent = JSON.stringify(inventory, null, 2);
  console.log("Simple Inventory:", inventory);
}

/* ===== Mini Project 6 ===== */
const students = [
  { name: "Arun", age: 20, marks: 80 },
  { name: "Divya", age: 21, marks: 90 },
  { name: "Kiran", age: 19, marks: 70 },
];

function showStudents() {
  let total = 0;
  students.forEach((s) => (total += s.marks));
  const avg = total / students.length;

  studentOutput.textContent = `Students:\n${JSON.stringify(
    students,
    null,
    2
  )}\n\nClass Average: ${avg}`;

  console.log("Students:", students);
  console.log("Average Marks:", avg);
}
