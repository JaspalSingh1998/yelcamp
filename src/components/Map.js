import MapImage from "../Assets/Map.png";

function Map() {
  return (
    <div className="border border-item-border rounded-md p-9">
      <img src={MapImage} alt="Location Map" className="w-full" />
    </div>
  );
}

export default Map;
