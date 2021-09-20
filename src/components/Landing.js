import Logo from "../Assets/Logo.png";
import HeroImage from "../Assets/Hero Image (Tablet and Mobile).jpg";
// import HeroImageLarge from "../Assets/Hero Image.jpg";
import Airbnb from "../Assets/Airbnb.svg";
import Booking from "../Assets/Booking.svg";
import PlumGuide from "../Assets/Plum Guide.svg";
import Checkmark from "../Assets/Checkmark.svg";

function Landing() {
  return (
    <div>
      <header className="py-10 px-5">
        <img src={Logo} alt="Yelpcamp Logo" />
      </header>
      <div>
        <img src={HeroImage} alt="Hero" />
        <div className="py-10 px-5">
          <h1 className="font-bold text-4xl pb-2">
            Explore the best camps on Earth.
          </h1>
          <p className="text-text-muted pb-4">
            YelpCamp is a curated list of the best camping spots on Earth.
            Unfiltered and unbiased reviews.
          </p>
          <ul className="space-y-4 pb-6">
            <li className="flex gap-3">
              <img src={Checkmark} alt="Checkmark Icon" /> Add your own camp
              suggestions.
            </li>
            <li className="flex gap-3">
              <img src={Checkmark} alt="Checkmark Icon" /> Leave reviews and
              experiences.
            </li>
            <li className="flex gap-3">
              <img src={Checkmark} alt="Checkmark Icon" /> See locations for all
              camps.
            </li>
          </ul>
          <button className="py-4 px-6 bg-black font-bold text-white rounded-md mb-9">
            View Campgrounds
          </button>
          <div className="flex">
            <img src={Airbnb} alt="Airbnb" className="w-32" />
            <img src={Booking} alt="Booking" className="w-32" />
            <img src={PlumGuide} alt="PlumGuide" className="w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
