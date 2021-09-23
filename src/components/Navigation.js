import { useContext } from "react";
import Logo from "../Assets/Logo.png";
import Hamburger from "../Assets/Hamburger Menu.svg";

import SignOut from "./SignOut";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

import { AuthUserContext } from "./Session";

function Navigation() {
  const authUser = useContext(AuthUserContext);
  return (
    <div className="container mx-auto py-4 px-5">
      <div className="flex items-center justify-between">
        {authUser ? (
          <NavigationAuth className={authUser} />
        ) : (
          <NavigationNonAuth />
        )}
      </div>
    </div>
  );
}

const NavigationAuth = (authUser) => {
  console.log(authUser);
  return (
    <>
      <div className="flex gap-4 items-center">
        <img src={Logo} alt="Logo" />
        <Link
          to={ROUTES.ALLCAMPS}
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
          {authUser.className.displayName}
        </Link>

        <SignOut />

        <img src={Hamburger} alt="Menu Btn" className="lg:hidden" />
      </div>
    </>
  );
};
const NavigationNonAuth = () => (
  <>
    <div className="flex gap-4 items-center">
      <img src={Logo} alt="Logo" />
      <Link
        to={ROUTES.ALLCAMPS}
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
  </>
);

export default Navigation;
