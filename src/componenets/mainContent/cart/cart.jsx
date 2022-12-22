import { useDispatch, useSelector } from "react-redux";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus, faMinus);
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.entities.cart);
  const { list, totalItems, cartPrice } = cartItems;
  console.log(list);

  return (
    <div className="container p-3 pt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Prduct</th>
            <th scope="col">Quantity</th>
            <th scope="col">price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {list &&
            Object.entries(list).map(([index, product]) => (
              <tr key={index}>
                <td className="pt-3">{product.name}</td>
                <td className="pt-3">
                  {" "}
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
                </td>
                <td className="pt-3">{`$${product.totalPrice}`}</td>
                <td className="pt-3">
                  <button type="button" class="btn btn-outline-danger">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          <tr>
            <td className="fw-bold" colSpan={2}>
              {" "}
              Total
            </td>
            <td className="fw-bold">{`$${cartPrice}`}</td>
            <td>
              {" "}
              <button type="button" class="btn btn-outline-danger">
                Remove All
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
