import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";

// import MountUlap from "../Assets/Camp Images/Mount Ulap.jpg";
// import CalaguasIslands from "../Assets/Camp Images/Calaguas Island.jpg";
// import OnayBeach from "../Assets/Camp Images/Onay Beach.jpg";
// import SevenSistersWaterfall from "../Assets/Camp Images/Seven Sisters Waterfall.jpg";
// import LatikRiverside from "../Assets/Camp Images/Latik Riverside.jpg";
// import BuloySprings from "../Assets/Camp Images/Buloy Springs.jpg";

import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

class CampsGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      camps: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    const db = getDatabase();
    const campsRef = ref(db, "camps");
    onValue(campsRef, (snapshot) => {
      if (snapshot.exists()) {
        const campsObject = snapshot.val();
        const campsList = Object.keys(campsObject).map((key) => ({
          ...campsObject[key],
          uid: key,
        }));
        this.setState({
          camps: campsList,
          loading: false,
        });
      } else {
        this.setState({
          camps: [],
          loading: false,
        });
      }
    });
  }
  render() {
    const { camps } = this.state;
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-2">
        {camps.map((camp) => (
          <div
            key={camp.uid}
            className="card border-item-border border rounded-md p-4"
          >
            <header className="mb-4">
              <img
                src={camp.image}
                alt="Camp"
                className="rounded-md mb-4  w-full"
              />
              <div>
                <h3 className="font-bold mb-2">{camp.name}</h3>
                <p className="text-text-muted">{camp.description}</p>
              </div>
            </header>
            <Link
              to={ROUTES.SINGLECAMP}
              className="inline-block text-center w-full font-bold border border-item-border py-4 rounded-md"
            >
              View Campground
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default CampsGrid;
