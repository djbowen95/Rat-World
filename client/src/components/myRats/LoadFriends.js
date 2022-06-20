import React from "react";
import FriendCards from "../ratCards/FriendsCards";
import Auth from "../../utils/Auth";
import { QUERY_ONLY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const LoadFriends = () => {

  // const User = Auth.getProfile()
  // console.log( User.data._id )
  // const [ user_info, {loading, data} ] = useQuery(QUERY_USER);


  

  const friends = [
    {
      // image: <img src="" alt="friend 1" />,
      username: "USERNAME",
    },
    {
      // image: <img src="" alt="friend 2" />,
      username: "USERNAME",
    },
    {
      // image: <img src="" alt="friend 3" />,
      username: "USERNAME",
    },
    {
      // image: <img src="" alt="friend 4" />,
      username: "USERNAME",
    },
    {
      // image: <img src="" alt="friend 5" />,
      username: "USERNAME",
    },
    {
      // image: <img src="" alt="friend 6" />,
      username: "USERNAME",
    },
  ];

  return <div>
      <FriendCards friends = {friends}/>
  </div>;
};

export default LoadFriends;
