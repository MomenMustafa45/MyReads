import React from "react";
import { BookOptions } from "./BookOptions";
import PropTypes from "prop-types";

const Book = ({
  bgImageURL,
  title,
  authors,
  imageURL,
  currentClick,
  updateTheShelf,
  book,
  bookList,
  allBooks,
  id,
  bookShelf,
}) => {
  // required props

  Book.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    imageURL: PropTypes.string,
    bgImageURL: PropTypes.string,
  };

  return (
    <>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: bgImageURL
                ? `url("${bgImageURL}")`
                : `url("${imageURL}")`,
            }}
          />
          <BookOptions
            onClick={currentClick}
            updateTheShelf={updateTheShelf}
            book={book}
            bookList={bookList}
            allBooks={allBooks}
            id={id}
            bookShelf={bookShelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors ? authors : "Harper Lee"}</div>
      </div>
    </>
  );
};

export default Book;
