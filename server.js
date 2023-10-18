const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

const books = [
  { id: 1, title: 'Aprendendo React', author: 'Autor A' },
  { id: 2, title: 'Node.js para Iniciantes', author: 'Autor B' },
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

