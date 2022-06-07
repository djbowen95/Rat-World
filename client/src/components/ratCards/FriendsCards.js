import React, { useState } from "react";

const FriendCards = (props) => {
  const [visible, setVisible] = useState(3);

  const showMoreFriends = () => {
      setVisible((prevFriends) => prevFriends + 3)
  }

  return (
    <div>
      <div className="friendsContainer">
        {props.friends.slice(0, visible).map((friend) => (
          <div>
              {friend.image}
              {friend.username}
          </div>
        ))}
        <button onClick= {showMoreFriends}>Load More</button>
      </div>
    </div>
  );
};

export default FriendCards;
