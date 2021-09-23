import formatDistanceToNow from "date-fns/formatDistanceToNow";

import Chat from "../Assets/Chat Bubble.svg";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

function Comments(props) {
  const { comments, id } = props;

  const reviews = comments || [];

  return (
    <div className="border border-item-border rounded-md p-9">
      {reviews &&
        reviews.map((review, i) => (
          <div className="border-b border-item-border py-4" key={i}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">{review.author}</h3>
              <p className="text-text-muted">
                {formatDistanceToNow(review.time, { addSuffix: true })}
              </p>
            </div>
            <p className="text-text-muted">{review.comment}</p>
          </div>
        ))}

      <div className="flex justify-end">
        <Link
          to={`${ROUTES.ADDCOMMENT}/${id}`}
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

export default Comments;
