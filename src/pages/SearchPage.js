import PropTypes from "prop-types";
import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import Book from "../components/Book";

const SearchPage = ({
  updateTheShelf,
  showText,
  showTextHandler,
  allBooks,
}) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  SearchPage.propTypes = {
    updateTheShelf: PropTypes.func.isRequired,

    showTextHandler: PropTypes.func.isRequired,
  };

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
  // SearchPage.propTypes = {
  //   currentClick: PropTypes.func.isRequired,
  // };

  const searchForBookHandler = async (e) => {
    const value = e.target.value;
    setFilteredBooks(value);
    if (value) {
      const response = await BooksAPI.search(e.target.value);

      if (response.length > 0) {
        setBooks(response);
        // console.log(response);
      } else {
        setBooks([]);
      }
    } else {
      setBooks([]);
    }
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
          {showText && (
            <div className="show-text">
              <p>Book added successfully!</p>
            </div>
          )}
          <ol className="books-grid">
            {filteredBooks.length === 0 ? (
              <div>
                <h5>Search for your favorite book:</h5>
              </div>
            ) : books.length > 0 ? (
              books.map((book) => {
                let shelf = "none";
                allBooks.forEach((item) => {
                  if (book.id === item.id) {
                    shelf = item.shelf;
                  }
                });

                return (
                  <li key={book.id}>
                    <Book
                      title={book.title}
                      imageURL={
                        book.imageLinks ? book.imageLinks.smallThumbnail : ""
                      }
                      authors={book.authors}
                      updateTheShelf={updateTheShelf}
                      book={book}
                      currentClick={showTextHandler}
                      bookList={books}
                      bookShelf={shelf ? shelf : "move"}
                    />
                  </li>
                );
              })
            ) : (
              "there is no boook includes this characters"
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
