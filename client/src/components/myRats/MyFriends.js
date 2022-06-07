import React, { useState, useRef, useEffect } from "react";
import LoadFriends from "./LoadFriends";

const MyFriends = () => {
  const styles = {
    flex: {
      textAlign: "center",
    },
    friendImage: {
      border: "1px solid",
      boxShadow: "5px 5px gray",
      padding: "50px",
      borderRadius: "50%",
    },
    friendTitle: {
      textAlign: "center",
    },
    section: {
      marginTop: "100px",
      marginBottom: "100px",
    },
    addFriend: {
      display: "flex",
      justifyContent: "space-evenly",
      border: "1px solid",
      boxShadow: "5px 5px gray",
      padding: "20px 100px 20px 100px",
    },
    input: {
      width: "250px",
      height: "30px",
      marginRight: "10px",
    },
    btn: {
      height: "30px",
      cursor: "pointer",
    },
    inputBtn: {
      marginTop: "40px",
      marginLeft: "20px"
    },
  };

  const [addFriend, setAddFriend] = useState()
  const addFriendRef = useRef()

  useEffect(() => {

  }, [])

  function handleAddFriend (e) {
    const name = addFriendRef.current.value 
    if (name === '') return
    addFriendRef.current.value = null
    console.log(name)
  }

  return (
    <div style={styles.flex}>
    <section>
        <h2 style={styles.friendTitle}>My Friends</h2>
        <LoadFriends/>
    </section>

      <section className="add-friend-container" style={styles.section}>
        <h2 style={styles.friendTitle}>Add a Friend</h2>
        <div className="add-friend-card" style={styles.addFriend}>
          <img style={styles.friendImage} src="" alt="" />
          <div style={styles.inputBtn}>
            <input
              style={styles.input}
              ref={addFriendRef}
              type="text"
              className="input"
              placeholder="Enter email address..."
            ></input>
            <button onClick={handleAddFriend} style={styles.btn}>Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyFriends;
