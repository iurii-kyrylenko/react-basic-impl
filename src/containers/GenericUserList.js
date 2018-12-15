import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: new Map()
    };
  }

  handleLike = id => () => {
    const map = this.state.likes;
    const likes = (map.get(id) || 0) + 1;
    map.set(id, likes);
    this.setState({ likes: map });
  }

  render() {
    const Component = this.props.children;
    return (
      <Component
        users={this.props.users}
        likes={this.state.likes}
        handleLike={this.handleLike}
      />
    );
  }
}
