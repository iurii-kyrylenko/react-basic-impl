import React from "react";
import FancyBox from "./FancyBox";
import NameBox from "./NameBox";
import LikeBox from "./LikeBox";
import LikeButton from "./LikeButton";

export default function({user, likes, onClick}) {
  return (
    <FancyBox>
      <div>
        Name:
        {' '}
        <NameBox name={`${user.firstName} ${user.lastName}`} />
        {' '}
        Likes:{' '}
        <LikeBox likes={likes} />
        {' '}
        <LikeButton onClick={onClick} />
      </div>
    </FancyBox>
  );
}
