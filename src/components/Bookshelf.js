import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = ({ bookList, currentReadingClick }) => {
  // required props
  // required props
  Bookshelf.propTypes = {
    bookList: PropTypes.array.isRequired,
    currentReadingClick: PropTypes.func.isRequired,
  };
  return (
    <div>
      <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((item) => {
              return (
                <li key={item.id}>
                  <Book
                    title={item.title}
                    bgImageURL={item.imageLinks.smallThumbnail}
                    currentClick={currentReadingClick}
                    id={item.id}
                    authors={item.authors}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
