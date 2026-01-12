/* Mini Project 1: Click Counter */
let count = 0;
const countEl = document.getElementById("count");

document.getElementById("increment").onclick = () => {
  count++;
  countEl.textContent = count;
};

document.getElementById("reset").onclick = () => {
  count = 0;
  countEl.textContent = count;
};

/* Mini Project 2: Image Preview */
document.getElementById("imageInput").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    document.getElementById("preview").src = URL.createObjectURL(file);
  }
});

/* Mini Project 3: Keyboard Shortcut */
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    document.getElementById("shortcutMessage").textContent = "Save Triggered!";
  }
  if (e.altKey && e.key === "m") {
    document.getElementById("shortcutMessage").textContent = "Menu Triggered!";
  }
});

/* Mini Project 4: Quiz App */
const quiz = [
  {
    q: "HTML stands for?",
    a: ["Hyper Text Markup Language", "High Text"],
    c: 0,
  },
  { q: "JS is used for?", a: ["Styling", "Logic"], c: 1 },
  { q: "CSS is used for?", a: ["Design", "Database"], c: 0 },
];

let qIndex = 0;
let score = 0;

function loadQuiz() {
  const q = quiz[qIndex];
  document.getElementById("question").textContent = q.q;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.a.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      btn.className = i === q.c ? "correct" : "wrong";
      if (i === q.c) score++;
      setTimeout(() => {
        qIndex++;
        qIndex < quiz.length ? loadQuiz() : showScore();
      }, 800);
    };
    optionsDiv.appendChild(btn);
  });
}

function showScore() {
  document.getElementById("question").textContent = "Quiz Finished!";
  document.getElementById("options").innerHTML = "";
  document.getElementById(
    "score"
  ).textContent = `Score: ${score}/${quiz.length}`;
}

loadQuiz();

/* Mini Project 5: Drag and Drop */
const dragBox = document.getElementById("dragBox");
const dropArea = document.getElementById("dropArea");

dragBox.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", "dragBox");
});

dropArea.addEventListener("dragover", (e) => e.preventDefault());

dropArea.addEventListener("drop", () => {
  dropArea.appendChild(dragBox);
});

/* Mini Project 6: Key Logger */
const keyInput = document.getElementById("keyInput");

keyInput.addEventListener("keydown", (e) => {
  document.getElementById("lastKey").textContent = e.key;
  const li = document.createElement("li");
  li.textContent = e.key;
  document.getElementById("keyList").appendChild(li);
});
