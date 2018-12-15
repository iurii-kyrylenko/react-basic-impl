import React from "react";
import FancyBox from "./FancyBox";
import NameBox from "./NameBox";

const UserBox = ({ user }) => {
  return (
    <FancyBox>
      Name:{' '}
      <NameBox name={`${user.firstName} ${user.lastName}` } />
    </FancyBox>
    
  );
}

export default UserBox;
