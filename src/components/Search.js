import React from "react";

const Search = ({ keyword, setKeyword }) => {
  const handlerchangefunc = (event) => {
    event.preventDefault();
    setKeyword(event.target.value.toLowerCase());
  };
  return (
    <div className="container pt-4 pb-4">
      <input
        type="search"
        placeholder="Search by pizza name"
        value={keyword}
        onChange={handlerchangefunc}
        className="form-control mb-4"
      />
    </div>
  );
};

export default Search;
