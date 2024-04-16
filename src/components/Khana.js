const Khana = ({ main, khana1 }) => {
  return (
    <>
      {" "}
      <div>
       
        {main[0]?.info?.cuisines.map((item) => {
          return (
            <div>
              <h2>{item}</h2>{" "}
            </div>
          );
        })}
      </div>{" "}
    </>
  );
};
export default Khana;
