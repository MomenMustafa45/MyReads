import React, { useState } from "react";
import PropTypes from "prop-types";

export const BookOptions = ({
  currentReadingClick,
  id,
  messageBookHandler,
}) => {
  const [state, setState] = useState(false);

  // required props
  // required props
  BookOptions.propTypes = {
    currentReadingClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };

  const addBookHandler = (e) => {
    const value = e.target.value;
    currentReadingClick(id, value);
    console.log(value);
    if (messageBookHandler) {
      messageBookHandler();
    }
  };

  return (
    <>
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading" onClick={addBookHandler}>
            Currently Reading
          </option>
          <option value="wantToRead" onClick={addBookHandler}>
            Want to Read
          </option>
          <option value="read" onClick={addBookHandler}>
            Read
          </option>
          <option value="none" onClick={addBookHandler}>
            None
          </option>
        </select>
      </div>
    </>
  );
};
