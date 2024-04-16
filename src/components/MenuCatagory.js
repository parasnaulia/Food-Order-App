import React, { useState } from "react";
import MenuData from "./MenuData";

const MenuCatagory = ({ item, index, index1, setIndex1, handle }) => {
  console.log(item);
  const [toggle, setToggle] = useState(false);

  function changeHandle() {
    setToggle(!toggle);
  }

  return (
    <div className="Main" key={index}>
      <div className="MainInner">
        <div>
          <h1>
            {item?.card?.card?.title}({item?.card?.card?.itemCards.length}){" "}
          </h1>
        </div>
        <div>
          <button
            className="btn1"
            // Invoke the handleChange function
            onClick={() => {
              //   console.log("Clicked");
              handle(index);
            }}
          >
            ⬇️
          </button>
        </div>
      </div>
      {/* <div className={`menuDataContainer ${toggle ? "expanded" : ""}`}>
        <MenuData items={item?.card?.card?.itemCards} />
      </div> */}
      {index1 === index ? (
        <div className={`menuDataContainer ${toggle ? "expanded" : ""}`}>
          {" "}
          <MenuData items={item?.card?.card?.itemCards} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MenuCatagory;
