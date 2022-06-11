import React from "react";

import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";
import PropTypes from "prop-types";

const ListBooksPage = ({
  currentReading,
  currentReadingHandler,
  wantToReadList,
  readList,
}) => {
  // required props
  // required props
  ListBooksPage.propTypes = {
    currentReadingHandler: PropTypes.func.isRequired,
    currentReading: PropTypes.array.isRequired,
    wantToReadList: PropTypes.array.isRequired,
    readList: PropTypes.array.isRequired,
  };
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <h2 className="bookshelf-title">Currently Reading</h2>
            {currentReading.length === 0 ? (
              <h5>
                You have no reading books yet!. Search and Add your favorite
                book
              </h5>
            ) : (
              <Bookshelf
                title="Currently Reading"
                bookList={currentReading}
                currentReadingClick={currentReadingHandler}
              />
            )}
            <h2 className="bookshelf-title">Want to Read</h2>
            {wantToReadList.length === 0 ? (
              <h5>Books that you want to read is empty!.</h5>
            ) : (
              <Bookshelf
                title="Want to Read"
                bookList={wantToReadList}
                currentReadingClick={currentReadingHandler}
              />
            )}
            <h2 className="bookshelf-title">Read</h2>
            {readList.length === 0 ? (
              <h5>Read books section is empty!.</h5>
            ) : (
              <Bookshelf
                title="Read"
                bookList={readList}
                currentReadingClick={currentReadingHandler}
              />
            )}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListBooksPage;
