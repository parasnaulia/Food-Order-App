import { useEffect, useState } from "react";
const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetching_Data() {
      const apidata = await fetch("https://api.github.com/users/parasnaulia");
      const jsondata = await apidata.json();
      // console.log(jsondata);
      setData(jsondata);
    }

    fetching_Data();
  }, []);
  return data;
};
export default useFetch;
