const Image = ({ main, img1 }) => {
  return (
    <>
      <div>
        {" "}
        
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            main[0]?.info?.cloudinaryImageId
          }
          alt="No image"
          style={{ height: "500px", width: "500px" }}
        />
      </div>
    </>
  );
};
export default Image;
