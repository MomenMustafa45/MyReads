import PropTypes from "prop-types";
import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import Book from "../components/Book";

const SearchPage = ({ currentClick }) => {
  const [messageBook, setMessageBook] = useState(false);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // const searchHandler = async (e) => {
  //   const results = await allBooks.filter((item) =>
  //     item.title.toLowerCase().includes(e.target.value)
  //   );
  //   setFilteredBooks(results);
  // };
  // //
  // const search = (e) => {
  //   setFilteredBooks(e.target.value);
  //   searchForBook(e.target.value);
  // };

  // required props
  // required props
  SearchPage.propTypes = {
    currentClick: PropTypes.func.isRequired,
  };

  const searchForBookHandler = async (e) => {
    const value = e.target.value;
    setFilteredBooks(value);
    if (value) {
      const response = await BooksAPI.search(e.target.value);

      if (response.length > 0) {
        setBooks(response);
      } else {
        setBooks([]);
      }
    } else {
      setBooks([]);
    }
  };

  const messageBookHandler = () => {
    setMessageBook(true);
    setTimeout(() => {
      setMessageBook(false);
    }, 3000);
  };

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={filteredBooks}
              onChange={searchForBookHandler}
            />
          </div>
        </div>
        <div className="search-books-results">
          {messageBook && (
            <div className="show-text">
              <p>Book added successfully!</p>
            </div>
          )}
          <ol className="books-grid">
            {books.length === 0 ? (
              <div>
                <h5>Search for your favorite book (EX):</h5>
                <p>
                  'Android', 'Art', 'Artificial Intelligence', 'Astronomy',
                  'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography',
                  'Brief', 'Business', 'Camus', 'Cervantes', 'Christie',
                  'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai',
                  'Design', 'Development', 'Digital Marketing', 'Drama',
                  'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy',
                  'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
                  'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen',
                  'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
                  'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money',
                  'Mystery', 'Negotiate', 'Painting', 'Philosophy',
                  'Photography', 'Poetry', 'Production', 'Programming', 'React',
                  'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science
                  Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun',
                  'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality',
                  'Web Development', 'iOS'
                </p>
              </div>
            ) : (
              books.map((book) => {
                return (
                  <li key={book.id}>
                    <Book
                      title={book.title}
                      imageURL={
                        book.imageLinks ? book.imageLinks.smallThumbnail : ""
                      }
                      authors={book.authors}
                      currentClick={currentClick}
                      id={book.id}
                      messageBookHandler={messageBookHandler}
                    />
                  </li>
                );
              })
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
