require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Password check
app.post('/check-password', (req, res) => {
  const { password } = req.body;
  if (password === process.env.APP_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Endpoint to get script URL
app.get('/get-script-url', (req, res) => {
  res.json({ url: process.env.SCRIPT_URL });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
