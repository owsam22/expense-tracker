
## 💸 Minimal Personal Expense Logger

A super lightweight personal expense tracker that logs data to Google Sheets, secured by a password prompt. Designed for **solo use**, hosted online but **accessible only to me**.

---

### 🚀 Features

* 🧾 Log **Debit** or **Credit** entries with name, amount, and optional notes
* 🗃 Stores data directly in a **Google Sheet**
* 🔐 Password protected with client-side auth and backend verification
* 🌐 Can be deployed on any Node.js-friendly platform (Render, Vercel with serverless, etc.)

---

### ⚙️ Tech Stack

* **Frontend:** HTML + CSS + Vanilla JS
* **Backend:** Node.js + Express
* **Storage:** Google Sheets via `google-spreadsheet` package
* **Auth:** Custom password check via `.env` and backend validation

---

### 🔑 Security

* The password is never stored in the frontend
* Verified via a protected server route using environment variables
* Basic security intended for private use only — not built for multi-user access

---

### 📦 Setup



2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```
PASSWORD=your-secret-password

```

4. **Deploy or run locally**

```bash
node server.js
```

---

### ✅ Todo

* [x] Log entries to Google Sheets
* [x] Secure with a password
* [ ] Add monthly total summary
* [ ] Export CSV or PDF
* [ ] Add categories or filters

---


