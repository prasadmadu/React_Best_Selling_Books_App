import React, { useState, useEffect } from 'react';
import '../src/css/App.css';
import { fetchData } from './axios';
import Cards from './components/cards/Cards';
import Header from './components/header/Header';

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  },[]);

  const getBooks = async () => {
    const data = await fetchData();
    setBooks(data.books);
  }

    return (


      <div className="App">
        <Header />
        <div className="container">
          <br/>
          <div class="row main">
            {books.map( book => (
              <Cards book={book}></Cards>
            ))}
          </div>
        </div>
      </div>
    );

}

export default App;
