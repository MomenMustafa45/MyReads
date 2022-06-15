import React, { useState } from "react";

export const BookOptions = ({
  onClick,
  book,
  updateTheShelf,
  bookList,
  bookShelf,
}) => {
  // const [defaultShelf, setDefaultShelf] = useState("");
  // required props
  // required props

  const shelfBook = bookList.filter((item) => item.id === book.id);

  const [value, setValue] = useState(
    bookShelf ? bookShelf : shelfBook[0].shelf
  );

  const updateShelf = (e) => {
    const value = e.target.value;
    updateTheShelf(book, value);
    setValue(value);
    // console.log(value);
    // onClick();
    if (onClick) {
      onClick();
    }
  };
  // console.log(bookShelf);
  return (
    <>
      <div className="book-shelf-changer">
        <select defaultValue={value} onChange={updateShelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </>
  );
};
