import React from "react";

export const BookOptions = ({ onClick, book, updateTheShelf }) => {
  // const [defaultShelf, setDefaultShelf] = useState("");
  // required props
  // required props

  const updateShelf = (e) => {
    const value = e.target.value;
    updateTheShelf(book, value);
    console.log(value);
    onClick();
  };

  return (
    <>
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading" onClick={updateShelf}>
            Currently Reading
          </option>
          <option value="wantToRead" onClick={updateShelf}>
            Want to Read
          </option>
          <option value="read" onClick={updateShelf}>
            Read
          </option>
          <option value="none" onClick={updateShelf}>
            None
          </option>
        </select>
      </div>
    </>
  );
};
