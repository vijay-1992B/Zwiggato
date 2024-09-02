import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Error = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <>
      <Header />
      <div className=" w-[100%] h-[100%]">
        <div className="bg-w flex justify-around py-[100px] px-[300px] ">
          <img
            className="w-[500px] h-[400px]"
            src="https://b.zmtcdn.com/images/z404x2.png?output-format=webp"
          ></img>
          <div className="flex  flex-col text-center justify-center">
            <h4 className="self-center w-[350px] text-center  ">
              This is a 404 page and we think it's fairly clear You aren't going
              to find what you're looking for here But we know you're hungry, so
              don't fret or rage Hit that big red button to go back to our
              homepage</h4>
              <Link to={"/"}><button className="self-center w-[150px] my-5 px-4 py-2 rounded-md text-white bg-[#CB202D] text-center">Back to home</button></Link>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Error;
