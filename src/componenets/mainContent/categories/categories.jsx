import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../../service/products-categories";
import "./Categories.css";
import { loadCategoried } from "../../../store/entities/categories";

function Categories(props) {
  const [active, setActive] = useState("All");

  const dispatch = useDispatch();
  const thisCategories = useSelector((state) => state.entities.categories.list);
  useEffect(() => {
    dispatch(loadCategoried());
  }, []);

  const { handleCurrentCategory } = props;

  const handleActiveClass = (category) => {
    setActive(category);
    handleCurrentCategory(category);
  };
  return (
    <ul className="list-group">
      {thisCategories.map((category) => (
        <li
          key={category}
          className={
            active === category
              ? "p-3 list-group-item border-light categories  active"
              : "p-3 list-group-item border-light categories"
          }
          onClick={() => {
            handleActiveClass(category);
          }}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
