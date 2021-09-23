import { useState, useContext } from "react";
import { withAuthorization } from "./Session";
import { withRouter } from "react-router";
import * as ROUTES from "../constants/Routes";

import { getDatabase, set, ref, push } from "firebase/database";

import { AuthUserContext } from "./Session";

const INITIAL_STATE = {
  comment: "",
  author: "",
};

function AddComment(props) {
  const authUser = useContext(AuthUserContext);
  const [review, setReviews] = useState(INITIAL_STATE);
  const { comment } = review;
  const { history } = props;

  function handleSubmit(event) {
    push(ref(getDatabase(), `camps/${props.match.params.id}/comments`), {
      comment,
      author: authUser.displayName,
    });
    history.push(`${ROUTES.SINGLECAMP}/${props.match.params.id}`);
    event.preventDefault();
  }

  function handleChange(event) {
    setReviews({ ...review, [event.target.name]: event.target.value });
  }
  return (
    <div className="container mx-auto py-10 px-5 lg:max-w-xl">
      <h2 className="font-bold text-4xl mb-8 w-sm md:w-full">
        Add New Comment
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="text-text-muted block mb-4 font-bold"
          >
            Description
          </label>

          <textarea
            className="p-4 bg-landing-bg text-text-muted w-full rounded-md h-60 resize-none leading-loose"
            name="comment"
            value={comment}
            onChange={handleChange}
            placeholder="This was probably the best camp i’ve visited this past year, definitely recommend visiting any time soon."
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
export default withRouter(withAuthorization(condition)(AddComment));
