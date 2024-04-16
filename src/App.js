// // console.log("hello");
// import React from "react";
// // import ReactDOM form "react-dom/client";
// // import * as ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
// //Now we Will Wirte app Components
// const App = () => {
//   return (
//     <>
//       <div>
//         <h1> This is my Components Render it </h1>
//       </div>
//     </>
//   );
// };

// let id1 = document.getElementById("root");
// let rootB = ReactDOM.createRoot(id1);
// rootB.render(App);
// // export default App;

// console.log("hello");
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import GlobalContext from "./Store/GlobalContext";

//This createBrowserRouter is a configuration given to react
//that on which which page to load
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Outlet,
} from "react-router-dom";
import About from "./components/About";

//Now we will write app component
const App = () => {
  // useEffect(fetchData, []);
  // async function fetchData() {
  //   try {
  //     const data = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6c2c8f1f08dba9abb6b5806972d5ebfb`
  //     );
  //     const jsonData = await data.json();
  //     console.log(jsonData);
  //   } catch (error) {
  //     console.log("Sorry error in fetching data" + error);
  //   }
  // }
  // console.log(apidata);
  const [name, setName] = useState([]);
  const [total, setTotle] = useState(0);

  return (
    <>
      <GlobalContext.Provider
        value={{
          name: name,
          setName: setName,
          total: total,
          setTotle: setTotle,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </GlobalContext.Provider>
    </>
  );
};

// let rootElement = document.getElementById("root");
// let root = ReactDOM.createRoot(rootElement);
// root.render(<RouterProvider Router={router} />);
// // export default App;

export default App;
