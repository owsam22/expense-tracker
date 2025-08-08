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


// Expand/collapse
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
