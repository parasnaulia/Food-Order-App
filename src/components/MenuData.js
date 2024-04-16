import { useContext } from "react";
import GlobalContext from "../Store/GlobalContext";

const MenuData = ({ items }) => {
  const { name, setName, total, setTotle } = useContext(GlobalContext);
  console.log(items);
  return (
    <div>
      {items.map((item, index) => {
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
              className="but"
              onClick={() => {
                setName((prev) => {
                  return [...prev, item];
                });
                setTotle((prev) => {
                  return prev + item?.card?.info?.price / 100;
                });
              }}
            >
              Add➕
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default MenuData;
