import React from "react";
import NameBox from "./NameBox";

const FancyUserBox = ({ user }) => {
  return (
    <div style={{ border: '1px solid blue' }}>
      Name:
      <NameBox name={`${user.firstName}  ${user.lastName}`} />
    </div>
  );
}
export default FancyUserBox;
