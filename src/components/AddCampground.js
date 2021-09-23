import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { withAuthorization } from "./Session";

import { getDatabase, ref, set } from "firebase/database";
import { withRouter } from "react-router";
import * as ROUTES from "../constants/Routes";

import { AuthUserContext } from "./Session";

const INITIAL_STATE = {
  name: "",
  price: 1,
  image: "",
  description: "",
  author: "",
};

function AddCampground(props) {
  const authUser = useContext(AuthUserContext);
  const [camp, setCamp] = useState(INITIAL_STATE);
  const { name, price, image, description } = camp;
  const { history } = props;
  function handleSubmit(event) {
    const id = uuidv4();
    set(ref(getDatabase(), `camps/${id}`), {
      name,
      price,
      image,
      description,
      author: authUser.displayName,
    });
    history.push(ROUTES.ALLCAMPS);
    event.preventDefault();
  }

  function handleChange(event) {
    setCamp({ ...camp, [event.target.name]: event.target.value });
  }

  return (
    <div className="container mx-auto py-10 px-5 lg:max-w-xl">
      <h2 className="font-bold text-4xl mb-8 w-sm md:w-full">
        Add New Campground
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="text-text-muted block mb-4 font-bold"
          >
            Campground Name
          </label>
          <input
            type="text"
            placeholder="Seven Sisters Waterfall"
            name="name"
            value={name}
            onChange={handleChange}
            className="p-4 bg-landing-bg text-text-muted w-full rounded-md"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="text-text-muted block mb-4 font-bold"
          >
            Price
          </label>
          <input
            type="number"
            placeholder="$149"
            name="price"
            min={1}
            value={price}
            onChange={handleChange}
            className="p-4 bg-landing-bg text-text-muted w-full rounded-md"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="text-text-muted block mb-4 font-bold"
          >
            Image
          </label>
          <input
            type="text"
            placeholder="www.thepinoytraveler.com/2018/0..."
            name="image"
            value={image}
            onChange={handleChange}
            className="p-4 bg-landing-bg text-text-muted w-full rounded-md"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="text-text-muted block mb-4 font-bold"
          >
            Description
          </label>
          <textarea
            className="p-4 bg-landing-bg text-text-muted w-full rounded-md h-60 resize-none leading-loose"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in Møre og Romsdal county, Norway."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white rounded-md font-bold p-4 mb-4"
        >
          Add Campground
        </button>
      </form>
    </div>
  );
}
const condition = (authUser) => !!authUser;

export default withRouter(withAuthorization(condition)(AddCampground));
