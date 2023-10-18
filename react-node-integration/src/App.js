import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await axios.get('http://localhost:3001/api/books');
      setBooks(response.data);
    }

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Listagem de Livros</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} - {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

