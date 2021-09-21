import Logo from "../Assets/Logo.png";
import Hamburger from "../Assets/Hamburger Menu.svg";

import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

function Navigation() {
  return (
    <div className="container mx-auto py-10 px-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <img src={Logo} alt="Logo" />
          <Link
            to={ROUTES.LANDING}
            className="font-bold text-text-muted mt-1 hidden lg:inline-block"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to={ROUTES.SIGN_IN}
            className="text-text-muted px-6 py-4 rounded-md hidden lg:inline-block"
          >
            Login
          </Link>
          <Link
            to={ROUTES.SIGN_UP}
            className="bg-black text-white font-bold px-6 py-4 rounded-md hidden lg:inline-block"
          >
            Create an account
          </Link>
          <img src={Hamburger} alt="Menu Btn" className="lg:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
