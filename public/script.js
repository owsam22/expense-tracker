async function getScriptUrl() {
  const res = await fetch('/get-script-url');
  const data = await res.json();
  return data.url;
}

document.querySelector(".expense-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const amount = form.amount.value;
  const type = form.type.value;
  const reason = form.reason.value;
  const person = form.person.value;

  // Get URL from server
  const baseUrl = await getScriptUrl();
  const url = `${baseUrl}?amount=${encodeURIComponent(amount)}&type=${encodeURIComponent(type)}&reason=${encodeURIComponent(reason)}&person=${encodeURIComponent(person)}`;

  document.querySelector(".loader").style.display = "block";
  document.querySelector(".form-message").textContent = "";

  try {
    const response = await fetch(url);
    const result = await response.text();
    document.querySelector(".form-message").textContent = result;
    form.reset();
  } catch (err) {
    document.querySelector(".form-message").textContent = "Failed to submit. Try again.";
  }
  document.querySelector(".loader").style.display = "none";
  loadSummaryData();
});


const passwordInput = document.getElementById('passwordInput');

// Detect Enter key press
passwordInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // prevent default form submission
    verifyPassword();   // call your function
  }
});
function verifyPassword() {
  const password = document.getElementById('passwordInput').value;
  fetch('/check-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        document.getElementById('authOverlay').style.display = 'none';
      } else {
        document.getElementById('authError').textContent = 'Incorrect password';
      }
    });
}

// Expand/collapse button
document.getElementById("expandBtn").addEventListener("click", () => {
  const extra = document.getElementById("extraInfo");
  const btn = document.getElementById("expandBtn");
  if (extra.style.display === "none") {
    extra.style.display = "block";
    btn.textContent = "Collapse ▲";
  } else {
    extra.style.display = "none";
    btn.textContent = "Expand ▼";
  }
});



async function getSheetUrl() {
  const res = await fetch('/get-sheet-url');
  const data = await res.json();
  return data.url;
}

async function loadSummaryData() {
  try {
    const sheetURL = await getSheetUrl();
    const res = await fetch(sheetURL);
    const text = await res.text();
    const rows = text.trim().split("\n").map(r => r.split(","));

    const credit = rows[2][5]; // F3
    const debit = rows[2][6]; // G3
    const balance = rows[2][7]; // H3

    document.getElementById("totalCredit").textContent = `₹${Number(credit).toLocaleString()}`;
    document.getElementById("totalDebit").textContent = `₹${Number(debit).toLocaleString()}`;
    document.getElementById("totalBalance").textContent = `₹${Number(balance).toLocaleString()}`;
  } catch (err) {
    console.error("Error fetching summary:", err);
  }
}

loadSummaryData();
