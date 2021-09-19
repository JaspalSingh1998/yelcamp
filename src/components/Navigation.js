import Logo from "../Assets/Logo.png";
import Hamburger from "../Assets/Hamburger Menu.svg";

function Navigation() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <img src={Logo} alt="Logo" />
        <a
          href="/"
          className="font-bold text-text-muted mt-1 hidden lg:inline-block"
        >
          Home
        </a>
      </div>
      <div>
        <a
          href="/"
          className="text-text-muted px-6 py-4 rounded-md hidden lg:inline-block"
        >
          Login
        </a>
        <a
          href="/"
          className="bg-black text-white font-bold px-6 py-4 rounded-md hidden lg:inline-block"
        >
          Create an account
        </a>
        <img src={Hamburger} alt="Menu Btn" className="lg:hidden" />
      </div>
    </div>
  );
}

export default Navigation;
