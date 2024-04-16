import { useContext } from "react";
import GlobalContext from "../Store/GlobalContext";

const CartData = ({ item, index }) => {
  const { name, setName, setTotle, total } = useContext(GlobalContext);
  function dataChange(index1) {
    const newArr = name.filter((item, index) => {
      return index1 !== index;
    });
    setName(newArr);
  }
  return (
    <div key={index} className="MenuContainer">
      <div className="MenuInner">
        <div className="Name">{item?.card?.info?.name}</div>
        <div>
          {" "}
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              item?.card?.info?.imageId
            }
            alt="no Image"
            className="MenuImg"
          />
        </div>
      </div>
      <div className="Price">Rs{item?.card?.info?.price / 100}</div>
      <div className="Disc"> {item?.card?.info?.description}</div>
      <button
        className="Delete"
        onClick={() => {
          dataChange(index);
          setTotle((prev) => {
            return prev - item?.card?.info?.price / 100;
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default CartData;
