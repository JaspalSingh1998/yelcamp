function Search() {
  return (
    <>
      <div className="bg-landing-bg my-10 p-8 ">
        <h2 className="text-4xl mb-2">Welcome to YelpCamp!</h2>
        <p className="text-text-muted mb-4 max-w-sm">
          View our hand-picked campgrounds from all over the world, or add your
          own.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Search for camp"
            className="outline-none border border-item-border rounded-md p-4"
          />
          <button className="font-bold bg-black text-white p-4 md:px-6 rounded-md">
            Search
          </button>
        </div>
        <a href="/" className="text-text-muted underline">
          or add your own campground
        </a>
      </div>
    </>
  );
}

export default Search;
