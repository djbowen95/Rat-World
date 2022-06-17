// This should be in a Friends directory, not under rat cards. 

import React, { useState } from "react";

const FriendCards = (props) => {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      border: "2px solid",
      boxShadow: "5px 5px gray",
      padding: "10px 100px 10px 100px",
    },
    cards: {
      display: "flex",
      width: "33%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    btn: {
      height: "25px",
      cursor: "pointer",
    },
  };

  const [visible, setVisible] = useState(3);

  const showMoreFriends = () => {
    setVisible((prevFriends) => prevFriends + 3);
  };

  return (
    <div>
      <div className="friendsContainer" style={styles.container}>
        {props.friends.slice(0, visible).map((friend, index) => (
          <div style={styles.cards} key={index}>
            {friend.image}
            {friend.username}
          </div>
        ))}
        <button onClick={showMoreFriends} style={styles.btn}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default FriendCards;
