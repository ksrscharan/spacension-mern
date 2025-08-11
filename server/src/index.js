// server/src/index.js
import express from 'express';

const app = express();
const port = 4000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
