import React from "react";
import FancyNameBox from "./FancyNameBox";
import FancyBox from "./FancyBox";

export default function UserList({ users, likes, handleLike }) {
  return (
    <div>
      {users.map(({ id, firstName, lastName }) =>
        <FancyNameBox
          key={id}
          user={{ firstName, lastName }}
          likes={likes.get(id) || 0}
          onClick={handleLike(id)}
        />
      )}
    </div>
  );
}

export function FancyUserList(props) {
  return (
    <FancyBox>
      <UserList {...props} />
    </FancyBox>
  );
}
