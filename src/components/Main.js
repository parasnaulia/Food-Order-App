import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuData from "./MenuData";
import MenuCatagory from "./MenuCatagory";
import Simmer1 from "./Simmer1";

const Main = () => {
  const [index1, setIndex1] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [apidata, setApidata] = useState([]);
  // const [index1, setIndex1] = useState(0);
  const { id } = useParams();
  // const [veg, setVeg] = useState([]);
  const [nonVeg, setNonveg] = useState([]);
  const handle = (index) => {
    setIndex1(index);
  };

  // console.log(data);
  useEffect(() => {
    async function fetching() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=" +
          id
      );
      const jsonData = await data.json();
      const real =
        jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      // console.log(real);
      // console.log(real);
      setApidata(real);
    }
    fetching();
  }, []);
  useEffect(() => {
    if (apidata && apidata.length !== 0) {
      const data = apidata.filter((item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      });
      setNonveg(data);
    }
  }, [apidata]);

  // console.log(nonVeg);
  function handleChange(pp, setpp) {
    setpp(!pp);
  }

  // console.log(apidata);

  return nonVeg.length === 0 ? (
    <Simmer1 />
  ) : (
    <div>
      {/* <MenuCatagory nonVeg={nonVeg} /> */}
      {nonVeg.map((item, index) => {
        return (
          <MenuCatagory
            item={item}
            index={index}
            index1={index1}
            setIndex1={setIndex1}
            handle={handle}
          />
        );
      })}
    </div>
  );
};
export default Main;
