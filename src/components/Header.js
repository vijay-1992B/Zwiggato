import logo from "../../logo.jpg";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {


  // const status = useOnlineStatus()

  return (
    <div className="flex justify-around items-center py-5  bg-white shadow-md ">
      <div className="left-header flex gap-6 items-center">
        <Link to={"/"}>
          <img src={logo} className="w-44 mix-blend-multiply"></img>
        </Link>
      </div>

      <div className="right-header flex gap-10 text-lg">
        <Link to={"/search"}>
          <i className="ri-search-line"></i> Search
        </Link>

        <Link to={"/offers"}>
          <i className="ri-discount-percent-line"></i> Offers
        </Link>

        <Link to={"/help"}>
          <i className="ri-hand-heart-line"></i> Help
        </Link>

        <Link to={"/signIn"}>
          <i className="ri-user-3-line"></i> Sign In
        </Link>

        <Link to={"/cart"}>
          <i className="ri-shopping-cart-2-line"></i> Cart
        </Link>


        {/* <Link to={"/cart"}>
          Status: {status ? "✅" : "🔴"}
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
