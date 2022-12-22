import React, { useContext } from "react";
import "./Products.css";
import Pagination from "../pagination/pagination";
import { paginationContext } from "../mainContent";
import { useDispatch } from "react-redux";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus, faMinus);

function Products(props) {
  const { toShowProducts } = props;
  const values = useContext(paginationContext);
  const pages = Math.ceil(Object.entries(toShowProducts).length / 3);
  const dispatch = useDispatch();

  const handleCartQuantity = (index) => {};

  return (
    <div className="d-flex flex-column justify-content-between ps-1">
      {toShowProducts !== {} &&
        Object.entries(toShowProducts)
          .slice(values.start, values.start + values.pageSize)
          .map(([index, product]) => (
            <div key={index} className="row mb-2">
              <div className="col ps-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-secondary">{`$${product.basePrice}`}</p>
                    {product.count === 0 ? (
                      <a
                        onClick={() => {
                          dispatch({
                            type: "products/quantityIncreased",
                            payload: index,
                          });
                          let newPorduct = { ...product };
                          newPorduct.count += 1;
                          dispatch({
                            type: "cart/itemAdded",
                            payload: { key: index, product: newPorduct },
                          });
                        }}
                        href="#"
                        className="btn btn-secondary"
                      >
                        ADD TO CART
                      </a>
                    ) : (
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => {
                            dispatch({
                              type: "products/quantityDecreased",
                              payload: index,
                            });
                            dispatch({
                              type: "cart/itemRemoved",
                              payload: { key: index, product },
                            });
                          }}
                        >
                          <FontAwesomeIcon icon="fa-solid fa-minus" />
                        </button>
                        <button type="button" className="btn counter ps-3 pe-3">
                          {product.count}
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => {
                            dispatch({
                              type: "products/quantityIncreased",
                              payload: index,
                            });
                            dispatch({
                              type: "cart/itemAdded",
                              payload: { key: index, product },
                            });
                          }}
                        >
                          <FontAwesomeIcon icon="fa-solid fa-plus" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      {pages > 1 && <Pagination pages={pages} />}
    </div>
  );
}

export default Products;
