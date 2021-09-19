import Map from "./Map";
import CampDetails from "./CampDetails";
function SingleCamp() {
  return (
    <div className="my-10 grid gap-10 lg:grid-cols-custom">
      <div className="lg:order-2">
        <CampDetails />
      </div>
      <div className="lg:order-1">
        <Map />
      </div>
    </div>
  );
}

export default SingleCamp;
