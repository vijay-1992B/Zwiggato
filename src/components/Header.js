import logo from "../../logo.jpg";

const Header = () => {
  return (
    <div className="flex justify-around items-center py-5  bg-white shadow-md ">
      <div className="left-header flex gap-6 items-center">
        <a href="">
          <img src={logo} className="w-44 mix-blend-multiply"></img>
        </a>
        <a href="" className="ml-2 self-center"></a>
      </div>

      <div className="right-header flex gap-10 text-lg">
        <a href="">
          <i className="ri-search-line"></i> Search
        </a>

        <a href="">
          <i className="ri-discount-percent-line"></i> Offers
        </a>

        <a href="">
          <i className="ri-hand-heart-line"></i> Help
        </a>

        <a href="">
          <i className="ri-user-3-line"></i> Sign In
        </a>
        <a href="">
          {" "}
          <i className="ri-shopping-cart-2-line"></i> Cart
        </a>
      </div>
    </div>
  );
};

export default Header;
