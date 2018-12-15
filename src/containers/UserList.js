import React from "react";
// import FancyNameBox from "../components/FancyNameBox";
import UserList from "../components/UserList";
// import { FancyUserList as UserList } from "../components/UserList";

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
    return (
      // <div>
      //   {this.props.users.map(({ id, firstName, lastName }) =>
      //     <FancyNameBox
      //       key={id}
      //       user={{ firstName, lastName }}
      //       likes={this.state.likes.get(id) || 0}
      //       onClick={this.handleLike(id)}
      //     />
      //   )}
      // </div>
      <UserList
        users={this.props.users}
        likes={this.state.likes}
        handleLike={this.handleLike}
      />
    );
  }
}
