import Search from "./Search";
import CampsGrid from "./CampsGrid";

function AllCamps() {
  return (
    <div className="container mx-auto py-10 px-5">
      <Search />
      <CampsGrid />
    </div>
  );
}

export default AllCamps;
