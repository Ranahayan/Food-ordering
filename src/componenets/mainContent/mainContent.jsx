import React, { useState, useEffect, createContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./categories/categories";
import Products from "./products/products";
import { loadPrducts } from "../../store/entities/products";

export const paginationContext = createContext({
  start: 0,
  pageSize: 0,
  setStart: () => {},
});
function MainContent() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [toShowProducts, setToShowProducst] = useState({});
  const [start, setStart] = useState(0);
  const [pageSize, setpageSize] = useState(3);

  const value = useMemo(() => ({ start, pageSize, setStart }), [start]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.products.list);
  const { byId, allIDs } = products;

  useEffect(() => {
    dispatch(loadPrducts());
  }, []);

  const getProductsIndexes = (currentCategory) => {
    return currentCategory !== "All"
      ? allIDs.filter((id) => byId[id.toString()].category === currentCategory)
      : allIDs;
  };

  const getProducts = (categoryProductsIndexes) => {
    let categoryProducts = {};
    categoryProductsIndexes.forEach((element) => {
      categoryProducts = {
        ...categoryProducts,
        [element]: byId[element.toString()],
      };
    });
    return categoryProducts;
  };

  useEffect(() => {
    const categoryProductsIndexes = getProductsIndexes(currentCategory);
    if (categoryProductsIndexes) {
      let categoryProducts = getProducts(categoryProductsIndexes);
      setToShowProducst(categoryProducts);
    }
  }, [products]);

  const handleCurrentCategory = (category) => {
    const categoryProductsIndexes = getProductsIndexes(category);
    let categoryProducts = getProducts(categoryProductsIndexes);

    setStart(0);
    setCurrentCategory(category);
    setToShowProducst(categoryProducts);
  };

  return (
    <div className="conatiner p-3 pt-4">
      {/* <p>{toShowProducts}</p> */}
      <div className="row">
        <div className="col-3 pe-0 border-end">
          <Categories handleCurrentCategory={handleCurrentCategory} />
        </div>
        <div className="col">
          <paginationContext.Provider value={value}>
            <Products toShowProducts={toShowProducts} />
          </paginationContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
