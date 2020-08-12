import React from "react";

const Search = ({ value , onSearch}) => {
  return (
    <div className="input-group rounded bg-light p-2">
      <span className="border-0 material-icons-outlined bg-light rounded-left p-2" id="basic-addon1">
        search
      </span>
      <input
        type="text"
        onChange={(e)=>onSearch(e.currentTarget.value)}
        autoComplete="off"
        name="query"
        value={value}
        className="form-control border-0 bg-light focus-none"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
