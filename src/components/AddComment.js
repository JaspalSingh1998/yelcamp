import { withAuthorization } from "./Session";

function AddComment() {
  return (
    <div className="container mx-auto py-10 px-5 lg:max-w-xl">
      <h2 className="font-bold text-4xl mb-8 w-sm md:w-full">
        Add New Comment
      </h2>
      <form>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="text-text-muted block mb-4 font-bold"
          >
            Description
          </label>
          <textarea
            className="p-4 bg-landing-bg text-text-muted w-full rounded-md h-60 resize-none leading-loose"
            defaultValue="This was probably the best camp i’ve visited this past year, definitely recommend visiting any time soon."
          />
        </div>
        <button className="w-full bg-black text-white rounded-md font-bold p-4 mb-4">
          Post Comment
        </button>
      </form>
    </div>
  );
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AddComment);
