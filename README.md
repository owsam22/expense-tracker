

## 💸 Minimal Personal Expense Logger 

A super lightweight personal expense tracker that logs data to Google Sheets, secured by a password prompt. Designed for **solo use**, hosted online but **accessible only to me**.

---

### 🌐 Live Site

👉 [Open App](https://trackit1.onrender.com)


---

### 🚀 Features

* 🧾 Log **Debit** or **Credit** entries with name, amount, and optional notes
* 🗃 Stores data directly in a **Google Sheet**
* 🔐 Password protected with backend verification
* 🌐 Can be deployed on any Node.js-friendly platform (Render, Vercel, etc.)

---

### ⚙️ Tech Stack

* **Frontend:** HTML + CSS + Vanilla JS
* **Backend:** Node.js + Express
* **Storage:** Google Sheets via `google-spreadsheet`
* **Auth:** Custom password validation via backend and `.env`

---

### 🔐 Security

* Password is checked only on the server
* Never exposed in dev tools
* Perfect for private use (not multi-user or enterprise-grade security)

---

### 🛠️ Setup Instructions


 **Install dependencies**

```bash
npm install
```

 **Create a `.env` file**

```env
PASSWORD=your-secret-password
SCRIPT_URL=your-google-script-url
SHEET_URL=your-sheet-url

```

 **Run locally**

```bash
node server.js
```

---

### ✅ Roadmap

* [x] Log expenses to Google Sheets
* [x] Password-protected access
* [x] Monthly total summary
* [ ] Export to CSV
* [ ] Add spending categories and filters

---



### 

Made with ❣️ by **Samarpan**
🔗 [Portfolio](https://owsam22.github.io/portfolio/)
🐙 [GitHub](https://github.com/owsam22)
💼 [LinkedIn](https://linkedin.com/in/samarpan22)

