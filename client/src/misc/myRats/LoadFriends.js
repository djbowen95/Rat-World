import React from "react";
import FriendCards from "../ratCards/FriendsCards"

const LoadFriends = () => {
  const friends = [
    {
      image: <img src="" alt="friend 1" />,
      username: "USERNAME",
    },
    {
      image: <img src="" alt="friend 2" />,
      username: "USERNAME",
    },
    {
      image: <img src="" alt="friend 3" />,
      username: "USERNAME",
    },
    {
      image: <img src="" alt="friend 4" />,
      username: "USERNAME",
    },
    {
      image: <img src="" alt="friend 5" />,
      username: "USERNAME",
    },
    {
      image: <img src="" alt="friend 6" />,
      username: "USERNAME",
    },
  ];

  return <div>
      <FriendCards friends = {friends}/>
  </div>;
};

export default LoadFriends;
