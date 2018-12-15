import React from "react";
import FancyNameBox from "../components/FancyNameBox";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
    this.addOneMoreLike = this.addOneMoreLike.bind(this);
  }

  addOneMoreLike() {
    const likes = this.state.likes + 1;
    this.setState({ likes });
  }

  render() {
    const { user } = this.props;
    const { likes } = this.state;

    return (
      <FancyNameBox user={user} likes={likes} onClick={this.addOneMoreLike} />
    );
  }
}
