import MountUlap from "../Assets/Camp Images/Mount Ulap.jpg";
import CalaguasIslands from "../Assets/Camp Images/Calaguas Island.jpg";
import OnayBeach from "../Assets/Camp Images/Onay Beach.jpg";
import SevenSistersWaterfall from "../Assets/Camp Images/Seven Sisters Waterfall.jpg";
import LatikRiverside from "../Assets/Camp Images/Latik Riverside.jpg";
import BuloySprings from "../Assets/Camp Images/Buloy Springs.jpg";

import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

function CampsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="card border-item-border border rounded-md p-4">
        <header className="mb-4">
          <img src={MountUlap} alt="Camp" className="rounded-md mb-4  w-full" />
          <div>
            <h3 className="font-bold mb-2">Mount Ulap</h3>
            <p className="text-text-muted">
              One of the most famous hikes in Benguet is Mt Ulap in Itogon.
            </p>
          </div>
        </header>
        <Link
          to={ROUTES.SINGLECAMP}
          className="inline-block text-center w-full font-bold border border-item-border py-4 rounded-md"
        >
          View Campground
        </Link>
      </div>
      <div className="card border-item-border border rounded-md p-4">
        <header className="mb-4">
          <img
            src={CalaguasIslands}
            alt="Camp"
            className="rounded-md mb-4 w-full"
          />
          <div>
            <h3 className="font-bold mb-2">Calaguas Islands</h3>
            <p className="text-text-muted">
              A paradise of islands that can rival the white sand beauty of
              Boracay.
            </p>
          </div>
        </header>
        <Link
          to={ROUTES.SINGLECAMP}
          className="inline-block text-center w-full font-bold border border-item-border py-4 rounded-md"
        >
          View Campground
        </Link>
      </div>
      <div className="card border-item-border border rounded-md p-4">
        <header className="mb-4">
          <img src={OnayBeach} alt="Camp" className="rounded-md mb-4  w-full" />
          <div>
            <h3 className="font-bold mb-2">Onay Beach</h3>
            <p className="text-text-muted">
              This is one of the best beach camping sites, beautiful and
              pristine.
            </p>
          </div>
        </header>
        <Link
          to={ROUTES.SINGLECAMP}
          className="inline-block text-center w-full font-bold border border-item-border py-4 rounded-md"
        >
          View Campground
        </Link>
      </div>
      <div className="card border-item-border border rounded-md p-4">
        <header className="mb-4">
          <img
            src={SevenSistersWaterfall}
            alt="Camp"
            className="rounded-md mb-4 w-full"
          />
          <div>
            <h3 className="font-bold mb-2">Seven Sisters Waterfall</h3>
            <p className="text-text-muted">
              The Seven Sisters is the 39th tallest waterfall in Norway.
            </p>
          </div>
        </header>
        <Link
          to={ROUTES.SINGLECAMP}
          className="inline-block text-center w-full font-bold border border-item-border py-4 rounded-md"
        >
          View Campground
        </Link>
      </div>
      <div className="card border-item-border border rounded-md p-4">
        <header className="mb-4">
          <img
            src={LatikRiverside}
            alt="Camp"
            className="rounded-md mb-4  w-full"
          />
          <div>
            <h3 className="font-bold mb-2">Latik Riverside</h3>
            <p className="text-text-muted">
              Philippines is one of the most dazzling countries in all of Asia.
            </p>
          </div>
        </header>
        <Link
          to={ROUTES.SINGLECAMP}
          className="inline-block text-center w-full font-bold border border-item-border py-4 rounded-md"
        >
          View Campground
        </Link>
      </div>
      <div className="card border-item-border border rounded-md p-4">
        <header className="mb-4">
          <img
            src={BuloySprings}
            alt="Camp"
            className="rounded-md mb-4  w-full"
          />
          <div>
            <h3 className="font-bold mb-2">Buloy Springs</h3>
            <p className="text-text-muted">
              This is one of the best beach camping sites, beautiful and
              pristine.
            </p>
          </div>
        </header>
        <Link
          to={ROUTES.SINGLECAMP}
          className="inline-block text-center w-full font-bold border border-item-border py-4 rounded-md"
        >
          View Campground
        </Link>
      </div>
    </div>
  );
}

export default CampsGrid;
