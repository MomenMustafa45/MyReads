import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";
import PropTypes from "prop-types";

const ListBooksPage = ({ showTextHandler, updateTheShelf, allBooks }) => {
  const [currentReadingSection, setCurrentReadingSection] = useState([]);
  const [wantToReadSection, setWantToReadSection] = useState([]);
  const [readSection, setReadSection] = useState([]);

  ListBooksPage.propTypes = {
    showTextHandler: PropTypes.func.isRequired,
    updateTheShelf: PropTypes.func.isRequired,
    allBooks: PropTypes.array.isRequired,
  };

  useEffect(
    () => {
      const wantToReadShelf = allBooks.filter(
        (item) => item.shelf === "wantToRead"
      );
      const currentlyReadingShelf = allBooks.filter(
        (item) => item.shelf === "currentlyReading"
      );

      const readShelf = allBooks.filter((item) => item.shelf === "read");
      setCurrentReadingSection(currentlyReadingShelf);
      setReadSection(readShelf);
      setWantToReadSection(wantToReadShelf);
    },

    [allBooks]
  );

  // required props
  // required props
  // ListBooksPage.propTypes = {
  //   showTextHandler: PropTypes.func.isRequired,
  //   currentReading: PropTypes.array.isRequired,
  //   wantToReadList: PropTypes.array.isRequired,
  //   readList: PropTypes.array.isRequired,
  // };

  // useEffect(() => {
  //   const checkCurrentBookShelf = () => {
  //     const bookShelf = allBooks.filter(
  //       (item) => item.shelf === "currentlyReading"
  //     );
  //     setCurrentReadingSection(bookShelf);
  //   };
  //   const checkWantToReadShelf = () => {
  //     const bookShelf = allBooks.filter((item) => item.shelf === "wantToRead");
  //     setWantToReadSection(bookShelf);
  //   };
  //   const readShelf = () => {
  //     const bookShelf = allBooks.filter((item) => item.shelf === "read");
  //     setReadSection(bookShelf);
  //   };
  //   checkCurrentBookShelf();
  //   checkWantToReadShelf();
  //   readShelf();
  // }, []);

  // console.log(currentlyReadingShelf);
  // console.log(wantToReadShelf);
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <h2 className="bookshelf-title">Currently Reading</h2>
            {currentReadingSection.length === 0 ? (
              <h5>
                You have no reading books yet!. Search and Add your favorite
                book
              </h5>
            ) : (
              <Bookshelf
                bookList={currentReadingSection}
                showText={showTextHandler}
                updateTheShelf={updateTheShelf}
                allBook={allBooks}
              />
            )}
            <h2 className="bookshelf-title">Want to Read</h2>
            {wantToReadSection.length === 0 ? (
              <h5>Books that you want to read is empty!.</h5>
            ) : (
              <Bookshelf
                bookList={wantToReadSection}
                showTextHandler={showTextHandler}
                updateTheShelf={updateTheShelf}
                allBook={allBooks}
              />
            )}
            <h2 className="bookshelf-title">Read</h2>
            {readSection.length === 0 ? (
              <h5>Read books section is empty!.</h5>
            ) : (
              <Bookshelf
                bookList={readSection}
                showTextHandler={showTextHandler}
                updateTheShelf={updateTheShelf}
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
