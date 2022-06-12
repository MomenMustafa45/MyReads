import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import ListBooksPage from "./pages/ListBooksPage";

const BooksApp = () => {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false,
  // };

  // let [state, setState] = useState(false);

  // const btnSearchHandler = () => {
  //   setState(true);
  // };

  // const closeSearchHandler = () => {
  //   setState(false);
  // };

  const [books, setBooks] = useState([]);

  const [currentReadingList, setCurrentReadingList] = useState([]);
  const [wantToReadList, setWantToReadList] = useState([]);
  const [readList, setReadList] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await BooksAPI.getAll();
  //     setBooks(response);
  //   };
  //   getData();
  // }, []);
  // console.log(books);

  const currentReadingBook = async (bookID, value) => {
    const response = await BooksAPI.get(bookID);
    //start of currentRead section
    //start of currentRead section
    if (value === "currentlyReading") {
      const isExistBook = currentReadingList.filter(
        (item) => item.id === response.id
      );
      if (isExistBook.length > 0) {
        setCurrentReadingList((prevState) =>
          prevState.filter((book) => book.id !== response.id)
        );
      }
      setWantToReadList((prevState) =>
        prevState.filter((book) => book.id !== response.id)
      );
      setReadList((prevState) =>
        prevState.filter((book) => book.id !== response.id)
      );
      setCurrentReadingList((prevState) => [...prevState, response]);
      //end of wantToRead Section
      //end of wantToRead Section
      //
      //start of wantToRead Section
      //start of wantToRead Section
    } else if (value === "wantToRead") {
      const isExistBook = wantToReadList.filter(
        (book) => book.id === response.id
      );
      if (isExistBook.length > 0) {
        setWantToReadList((prevState) =>
          prevState.filter((book) => book.id !== response.id)
        );
      }
      setCurrentReadingList((prevState) =>
        prevState.filter((book) => book.id !== response.id)
      );
      setReadList((prevState) =>
        prevState.filter((book) => book.id !== response.id)
      );
      setWantToReadList((prevState) => [...prevState, response]);
    }
    //end of wantToRead section
    //end of wantToRead section
    //

    //start of read section
    //start of read section
    else if (value === "read") {
      const isInsestBook = readList.filter((book) => book.id === response.id);
      if (isInsestBook.length > 0) {
        setReadList((prevState) =>
          prevState.filter((book) => book.id !== response.id)
        );
      }
      setCurrentReadingList((prevState) =>
        prevState.filter((book) => book.id !== response.id)
      );
      setWantToReadList((prevState) =>
        prevState.filter((book) => book.id !== response.id)
      );
      setReadList((prevState) => [...prevState, response]);
    }
    //end of read section
    //end of read section
    if (value === "none") {
      const checkCurrentBook = currentReadingList.map(
        (book) => book.id === response.id
      );
      const checkReadBook = readList.map((book) => book.id === response.id);
      const checkWantToReadBook = wantToReadList.map(
        (book) => book.id === response.id
      );

      if (checkCurrentBook || checkReadBook || checkWantToReadBook) {
        setCurrentReadingList((prevState) =>
          prevState.filter((book) => book.id !== response.id)
        );
        setWantToReadList((prevState) =>
          prevState.filter((book) => book.id !== response.id)
        );
        setReadList((prevState) =>
          prevState.filter((book) => book.id !== response.id)
        );
      }
    }
  };

  const searchForBookHandler = async (value) => {
    const response = await BooksAPI.search(value);
    setBooks(response);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ListBooksPage
              currentReading={currentReadingList}
              wantToReadList={wantToReadList}
              readList={readList}
              currentReadingHandler={currentReadingBook}
            />
          }
        />
        <Route
          path="search"
          element={
            <SearchPage
              allBooks={books}
              currentClick={currentReadingBook}
              searchForBook={searchForBookHandler}
            />
          }
        />
      </Routes>
      {/* {state ? <SearchPage onClick={closeSearchHandler} /> : <ListBooksPage onClick={btnSearchHandler} />} */}
    </div>
  );
};

export default BooksApp;
