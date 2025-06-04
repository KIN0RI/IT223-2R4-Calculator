function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  const expression = display.value;
  try {
    const result = eval(expression);
    display.value = result;
    addToHistory(`${expression} = ${result}`);
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById("history-list");
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

function toggleHistory() {
  const history = document.getElementById("history-container");
  history.classList.toggle("hidden");
}

document.getElementById("toggle-dark-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function clearHistory() {
  document.getElementById("history-list").innerHTML = "";
}
