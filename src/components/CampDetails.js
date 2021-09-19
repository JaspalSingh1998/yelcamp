import MountUlap from "../Assets/Camp Images/Mount Ulap.jpg";
import Comments from "./Comments";

function CampDetails() {
  return (
    <>
      <header className="border border-item-border rounded-md p-9 mb-9">
        <img
          src={MountUlap}
          alt="Mount Ulap"
          className="rounded-md mb-6 w-full"
        />
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-2xl">Mount Ulap</h2>
          <p className="font-bold">$104.99/night</p>
        </div>
        <p className="text-text-muted mb-4">
          Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point
          trail located near Tuba, Benguet, Philippines that offers the chance
          to see wildlife and is rated as moderate. The trail is primarily used
          for hiking.
        </p>
        <p className="text-text-muted italic">Submitted by Andrew Mike</p>
      </header>
      <Comments />
    </>
  );
}

export default CampDetails;
