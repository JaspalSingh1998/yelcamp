import { Component } from "react";
import Chat from "../Assets/Chat Bubble.svg";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

class Comments extends Component {
  render() {
    return (
      <div className="border border-item-border rounded-md p-9">
        <div className="border-b border-item-border py-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Adam Jones</h3>
            <p className="text-text-muted">13h ago</p>
          </div>
          <p className="text-text-muted">
            Honestly one of the best experiences ever, took us a while to figure
            out how to get there but it was amazing!
          </p>
        </div>
        <div className="border-b border-item-border py-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Isaac Dylan</h3>
            <p className="text-text-muted">1 day ago</p>
          </div>
          <p className="text-text-muted">
            Traveling changes you as a person, you gain more perspective, this
            is the perfect spot to do that.
          </p>
        </div>
        <div className="border-b border-item-border py-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Hudson Luca</h3>
            <p className="text-text-muted">3 days ago</p>
          </div>
          <p className="text-text-muted">
            Definitely recommend going there, not too far and not a lot of
            people to ruin the experience.
          </p>
        </div>
        <div className="flex justify-end">
          <Link
            to={`${ROUTES.ADDCOMMENT}/${this.props.id}`}
            className="bg-black text-white font-bold flex py-4 px-6 rounded-md mt-6 gap-3 "
          >
            <span>
              <img src={Chat} alt="chat bubble" />
            </span>{" "}
            Leave a review
          </Link>
        </div>
      </div>
    );
  }
}

export default Comments;
