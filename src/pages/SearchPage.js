import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";

const SearchPage = ({ currentClick, allBooks }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const searchHandler = async (e) => {
    const results = await allBooks.filter((item) =>
      item.title.toLowerCase().includes(e.target.value)
    );
    setFilteredBooks(results);
  };
  //
  // required props
  // required props
  SearchPage.propTypes = {
    currentClick: PropTypes.func.isRequired,
    allBooks: PropTypes.array.isRequired,
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
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => {
                return (
                  <li key={book.id}>
                    <Book
                      title={book.title}
                      imageURL={book.imageLinks.smallThumbnail}
                      authors={book.authors}
                      currentClick={currentClick}
                      id={book.id}
                    />
                  </li>
                );
              })
            ) : (
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
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
