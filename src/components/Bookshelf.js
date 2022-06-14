import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = ({ bookList, showTextHandler, updateTheShelf }) => {
  // required props
  // required props
  Bookshelf.propTypes = {
    bookList: PropTypes.array.isRequired,
    updateTheShelf: PropTypes.func.isRequired,
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
                    currentClick={showTextHandler}
                    id={item.id}
                    authors={item.authors}
                    bookList={bookList}
                    book={item}
                    updateTheShelf={updateTheShelf}
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
