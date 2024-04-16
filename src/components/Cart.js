import { useContext } from "react";
import GlobalContext from "../Store/GlobalContext";
import CartData from "./CartData";

const Cart = () => {
  const { name, setName, total, setTotle } = useContext(GlobalContext);
  console.log(name);
  //   console.log(data);
  return (
    <div>
      <button
        className="Delete"
        onClick={() => {
          setName([]);
          setTotle(0);
        }}
      >
        {" "}
        Clear Cart
      </button>
      {name.length !== 0 ? (
        name.map((item, index) => <CartData item={item} index={index} />)
      ) : (
        <div>
          <h1>Sorry, The Cart Is Empty</h1>
        </div>
      )}
      <div>
        <h1>Total {total}</h1>
      </div>
    </div>
  );
};
export default Cart;
