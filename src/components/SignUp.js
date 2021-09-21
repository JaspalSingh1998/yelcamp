import { useState } from "react";
import { withFirebase } from "./Firebase";

import Logo from "../Assets/Logo.png";
import Avatar from "../Assets/User Testimonial.svg";
import * as ROUTES from "../constants/Routes";
import { Link, withRouter } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

function SignUp(props) {
  const [user, setUser] = useState(INITIAL_STATE);

  const { email, password, error } = user;

  const { firebase, history } = props;

  function handleSubmit(event) {
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        history.push(ROUTES.ALLCAMPS);
      })
      .catch((error) => {
        console.log(error);
        setUser({ error });
      });
    event.preventDefault();
  }

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const isInvalid = email === "" || password === "";

  return (
    <div className="lg:grid lg:grid-cols-double lg:items-stretch">
      <div className="px-5 py-10 md:px-10 lg:px-32">
        <div className="flex justify-between items-center mb-10">
          <img src={Logo} alt="Logo" />
          <Link to={ROUTES.ALLCAMPS} className="text-xs text-text-muted">
            {" "}
            <span>&larr;</span> Back To Campgrounds
          </Link>
        </div>
        <h1 className="font-bold text-4xl mb-9 mt-32">
          Start exploring camps from all around the world.
        </h1>
        <form onSubmit={handleSubmit} className="md:w-3/4">
          <div className="mb-6">
            <label htmlFor="email" className="text-text-muted block mb-4">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              name="email"
              value={email}
              onChange={handleChange}
              className="p-4 bg-landing-bg text-text-muted w-full rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-text-muted block mb-4">
              Password
            </label>
            <input
              type="password"
              placeholder="At least 6 Characters Long"
              name="password"
              value={password}
              onChange={handleChange}
              className="p-4 bg-landing-bg text-text-muted w-full rounded-md"
            />
          </div>
          <button
            type="submit"
            disabled={isInvalid}
            className="w-full bg-black text-white rounded-md font-bold p-4 mb-4"
          >
            Create An Account
          </button>
          <p className="text-text-muted">
            Already a user?{" "}
            <Link to={ROUTES.SIGN_IN} className="text-accent font-bold">
              Sign in
            </Link>{" "}
          </p>
          <p>{error && error.message}</p>
        </form>
      </div>
      <div className="bg-landing-bg py-12 px-5 md:px-10 lg:px-32 lg:flex lg:items-center">
        <div>
          <blockquote className="font-bold text-2xl mb-6 lg:leading-relaxed">
            “YelpCamp has honestly saved me hours of research time, and the
            camps on here are definitely well picked and added.”
          </blockquote>
          <div className="flex gap-4 items-center">
            <img src={Avatar} alt="May Andrews" />
            <div>
              <h4 className="font-bold text-xs">May Andrews</h4>
              <p className="text-text-muted text-xs">Professional Hiker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(withFirebase(SignUp));
