import * as ROUTES from "../constants/Routes";
import { withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";

function SignOut(props) {
  const { firebase, history } = props;

  function handleClick() {
    firebase.doSignOut();
    history.push(ROUTES.ALLCAMPS);
  }
  return (
    <button
      className="font-bold px-6 py-4 rounded-md hidden lg:inline-block"
      onClick={handleClick}
    >
      Sign Out
    </button>
  );
}

export default withRouter(withFirebase(SignOut));
