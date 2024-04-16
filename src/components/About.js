// import About1 from "./About1";
import useFetch from "./useFetch";

const About = () => {
  const data = useFetch();

  return (
    <>
      <div className="paras">
        <div>
          <h1>My name is {data.name}</h1>
          <h2> {data.bio}</h2>
        </div>

        <div className="p-image">
          <img className="p-image" src={data.avatar_url} />
        </div>
      </div>
    </>
  );
};
export default About;
