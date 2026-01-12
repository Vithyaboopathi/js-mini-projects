/* =========================
1. Inventory Management
========================= */
let inventory = [
  { id: 1, name: "Laptop", category: "Electronics", qty: 10, price: 50000 },
  { id: 2, name: "Mouse", category: "Electronics", qty: 50, price: 500 },
];

function renderInventory(list = inventory) {
  inventoryList.innerHTML = "";
  let total = 0;
  list.forEach((p) => {
    total += p.qty * p.price;
    inventoryList.innerHTML += `<li>${p.name} | Qty: ${p.qty} | ₹${p.price}</li>`;
  });
  inventoryValue.textContent = total;
}

function searchInventory() {
  const val = invSearch.value.toLowerCase();
  renderInventory(
    inventory.filter(
      (p) => p.name.toLowerCase().includes(val) || p.id.toString() === val
    )
  );
}
renderInventory();

/* =========================
2. Library Management
========================= */
let books = [
  { id: 1, title: "React", author: "Dan", genre: "Tech", available: true },
  {
    id: 2,
    title: "JS Basics",
    author: "Kyle",
    genre: "Tech",
    available: false,
  },
];

function searchBooks() {
  const val = libSearch.value.toLowerCase();
  libraryList.innerHTML = "";
  books
    .filter(
      (b) =>
        b.title.toLowerCase().includes(val) ||
        b.author.toLowerCase().includes(val) ||
        b.genre.toLowerCase().includes(val)
    )
    .forEach((b) => {
      if (b.available)
        libraryList.innerHTML += `<li>${b.title} by ${b.author}</li>`;
    });
}

/* =========================
3. Student Marks Database
========================= */
let students = [
  { name: "Asha", marks: [80, 70, 90] },
  { name: "Rahul", marks: [60, 50, 65] },
];

students.forEach((s) => {
  const avg = s.marks.reduce((a, b) => a + b) / s.marks.length;
  studentMarksList.innerHTML += `<li>${s.name} - Average: ${avg.toFixed(
    2
  )}</li>`;
});

/* =========================
4. Customer Orders
========================= */
let orders = [
  { id: 1, customer: "Vithya", total: 2000 },
  { id: 2, customer: "Anu", total: 3500 },
];

function renderOrders(list = orders) {
  ordersList.innerHTML = "";
  let revenue = 0;
  list.forEach((o) => {
    revenue += o.total;
    ordersList.innerHTML += `<li>Order ${o.id} - ${o.customer} - ₹${o.total}</li>`;
  });
  totalRevenue.textContent = revenue;
}

function searchOrders() {
  const val = orderSearch.value.toLowerCase();
  renderOrders(
    orders.filter(
      (o) => o.customer.toLowerCase().includes(val) || o.id.toString() === val
    )
  );
}
renderOrders();

/* =========================
5. Student Performance Dashboard
========================= */
let performanceStudents = [
  { name: "Meena", roll: 1, marks: [85, 90, 88] },
  { name: "Ravi", roll: 2, marks: [40, 45, 50] },
];

performanceStudents
  .map((s) => {
    s.total = s.marks.reduce((a, b) => a + b);
    s.avg = s.total / s.marks.length;
    return s;
  })
  .sort((a, b) => b.avg - a.avg)
  .forEach((s) => {
    const status = s.avg >= 50 ? "pass" : "fail";
    const dist = s.avg >= 85 ? "highlight" : "";
    performanceList.innerHTML += `<li class="${status} ${dist}">
        ${s.name} - Avg: ${s.avg.toFixed(2)}
      </li>`;
  });

/* =========================
6. Online Order Fulfillment
========================= */
let fulfillmentOrders = [
  { id: 1, customer: "Vithya", amount: 3000, status: "fulfilled" },
  { id: 2, customer: "Anu", amount: 1500, status: "pending" },
];

function showPendingOrders() {
  fulfillmentList.innerHTML = "";
  let revenue = 0;
  fulfillmentOrders.forEach((o) => {
    if (o.status === "pending") {
      fulfillmentList.innerHTML += `<li>${o.customer} - Pending</li>`;
    } else {
      revenue += o.amount;
    }
  });
  fulfilledRevenue.textContent = revenue;
}
