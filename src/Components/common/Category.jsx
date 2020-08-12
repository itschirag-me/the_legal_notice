import React from "react";

const Category = ({ name, category, currentCategory, onCategory }) => {
  return (
      <a
        style={{ cursor: "pointer" }}
        onClick={() => onCategory(category)}
        className={
          category === currentCategory
            ? "nav-link bg-blue text-white m-lg-2 m-2 p-4 shadow"
            : "nav-link bg-light text-secondary m-lg-2 m-2 p-4 shadow"
        }
      >
        <span className="material-icons-outlined p-1">{category.icons}</span>
      </a>
  );
};

export default Category;
