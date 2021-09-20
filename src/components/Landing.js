import Logo from "../Assets/Logo.png";
import HeroImage from "../Assets/Hero Image (Tablet and Mobile).jpg";
import HeroImageLarge from "../Assets/Hero Image.jpg";
import Airbnb from "../Assets/Airbnb.svg";
import Booking from "../Assets/Booking.svg";
import PlumGuide from "../Assets/Plum Guide.svg";
import Checkmark from "../Assets/Checkmark.svg";

import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

function Landing() {
  return (
    <div>
      <header className="py-10 px-5 lg:hidden">
        <img src={Logo} alt="Yelpcamp Logo" />
      </header>
      <div className="lg:grid lg:grid-cols-double">
        <div className="lg:order-2 lg:flex lg:justify-end lg:max-h-screen">
          <img src={HeroImage} alt="Hero" className="lg:hidden w-full" />
          <img
            src={HeroImageLarge}
            alt="Hero"
            className="hidden lg:inline-block"
          />
        </div>
        <div className="py-10 px-5 lg:px-28 relative">
          <img
            src={Logo}
            alt="Logo"
            className="absolute top-12 hidden lg:inline-block"
          />
          <div className="lg:mt-28">
            <h1 className="font-bold text-4xl lg:text-6xl pb-2 lg:pb-4">
              Explore the best camps on Earth.
            </h1>
            <p className="text-text-muted pb-4">
              YelpCamp is a curated list of the best camping spots on Earth.
              Unfiltered and unbiased reviews.
            </p>
            <ul className="space-y-4 pb-6 text-text-muted">
              <li className="flex items-center gap-3">
                <img src={Checkmark} alt="Checkmark Icon" className="h-4 w-4" />{" "}
                Add your own camp suggestions.
              </li>
              <li className="flex items-center gap-3">
                <img src={Checkmark} alt="Checkmark Icon" className="h-4 w-4" />{" "}
                Leave reviews and experiences.
              </li>
              <li className="flex items-center gap-3">
                <img src={Checkmark} alt="Checkmark Icon" className="h-4 w-4" />{" "}
                See locations for all camps.
              </li>
            </ul>
            <Link
              to={ROUTES.ALLCAMPS}
              className="py-4 px-6 bg-black font-bold text-white rounded-md mb-9 inline-block"
            >
              View Campgrounds
            </Link>
            <div>
              <p className="text-text-muted">Partnered with:</p>
              <div className="flex">
                <img src={Airbnb} alt="Airbnb" className="w-32" />
                <img src={Booking} alt="Booking" className="w-32" />
                <img src={PlumGuide} alt="PlumGuide" className="w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
