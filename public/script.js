document.querySelector(".expense-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const amount = form.amount.value;
  const type = form.type.value;
  const reason = form.reason.value;
  const person = form.person.value;

  const url = `https://script.google.com/macros/s/AKfycbyooQ78Htka-qTCI3-6kbDeiYIezEoTuy5kwm3kpDqfwu-sk5ZyfQJwDGGcn-Ci7jHH/exec?amount=${encodeURIComponent(amount)}&type=${encodeURIComponent(type)}&reason=${encodeURIComponent(reason)}&person=${encodeURIComponent(person)}`;

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
