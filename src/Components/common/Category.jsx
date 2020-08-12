import React from "react";

const Category = ({ name, categoryId, icon, currentCategory, onCategory }) => {
  return (
      <a
        style={{ cursor: "pointer" }}
        onClick={() => onCategory(categoryId)}
        className={
          categoryId !== currentCategory._id
            ? "nav-link bg-light text-secondary m-2 p-4 shadow"
            : "nav-link bg-blue text-white m-2 p-4 shadow"
        }
      >
        <span className="material-icons-outlined">{icon}</span>
      </a>
  );
};

export default Category;
