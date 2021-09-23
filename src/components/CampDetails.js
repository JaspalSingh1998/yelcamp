import { Component } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

import Comments from "./Comments";

class CampDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      camp: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    const db = getDatabase();
    const campsRef = ref(db, `camps/${this.props.id}`);
    onValue(campsRef, (snapshot) => {
      if (snapshot.exists()) {
        const campsObject = snapshot.val();
        const campDetails = campsObject;
        this.setState({
          camp: campDetails,
          loading: false,
        });
      } else {
        this.setState({
          camp: [],
          loading: false,
        });
      }
    });
  }
  render() {
    const { name, price, image, description, author } = this.state.camp;
    return (
      <>
        <header className="border border-item-border rounded-md p-9 mb-9">
          <img src={image} alt={name} className="rounded-md mb-6 w-full" />
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="font-bold">{`$${price}/night`}</p>
          </div>
          <p className="text-text-muted mb-4">{description}</p>
          <p className="text-text-muted italic">Submitted by {author}</p>
        </header>
        <Comments id={this.props.id} />
      </>
    );
  }
}

export default CampDetails;
