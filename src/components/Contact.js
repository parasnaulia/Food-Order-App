// // import About1 from "./About1";

import { useEffect } from "react";

// import { Component } from "react";
// import About1 from "./About1";

// // const Contact = () => {
// //   return (
// //     <div>
// //       <h1>THis is Contact</h1>
// //       <About1 name={"paras"} age={24} />
// //       <About1 name={"Harish"} age={12}></About1>
// //     </div>
// //   );
// // };
// // export default Contact;

// class Contact extends Component {
//   constructor(props) {
//     super(props);
//     console.log("this is Parent Constructor is Called");
//   }
//   componentDidMount() {
//     console.log("this is Parent Component Did Mount is Called");
//   }
//   render() {
//     console.log("This is Parent Rander");
//     return (
//       <>
//         <div>
//           <h1>This is my Contact us Page</h1>
//         </div>
//         <About1 name={"Paras"} age={24} />
//         <About1 name={"Harish"} age={33} />
//       </>
//     );
//   }
// }
// export default Contact;
const Contact = () => {
  useEffect(() => {
    async function Fetch() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      console.log(jsonData);
      console.log(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(jsonData?.data?.cards[3]);
    }
    Fetch();
  }, []);
  return (
    <>
      <div>
        <h1>This is Contact us PAge</h1>
      </div>
    </>
  );
};
export default Contact;
