import React from "react";
import PropTypes from "prop-types";

export const BookOptions = ({ onClick, book, updateTheShelf }) => {
  // const [defaultShelf, setDefaultShelf] = useState("");
  // required props
  // required props
  BookOptions.propTypes = {
    onClick: PropTypes.func.isRequired,
    updateShelf: PropTypes.func.isRequired,
  };

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
