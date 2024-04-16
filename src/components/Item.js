// import { styled } from "@material-ui/core";
import React from "react";

export const Item = ({ item }) => {
  return (
    <div className="data">
      <div className="datai">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            item?.info?.cloudinaryImageId
          }
          alt="No image"
          style={{ height: "15rem", width: "100%" }}
        />
      </div>
      <div className="minor">
        <div className="food">{item?.info?.name}</div>
        <div className="food">{item?.info?.cuisines.join(", ")} </div>
      </div>
    </div>
  );
};
export default Item;
