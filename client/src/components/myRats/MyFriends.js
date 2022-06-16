import React, { useState, useRef, useEffect } from "react";
import LoadFriends from "./LoadFriends";
import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const MyFriends = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const [inputText, setInputText] = useState("");

  console.log(data?.users);
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase)
    setInputText(lowerCase);
  }; 

  function handleSearch(e) {
    console.log(e);
    setInputText(e);
  }

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
      marginLeft: "20px",
    },
  };

  return (
    <div style={styles.flex}>
      <section>
        <h2 style={styles.friendTitle}>My Friends</h2>
        <LoadFriends />
      </section>

      <section className="add-friend-container" style={styles.section}>
        <h2 style={styles.friendTitle}>Add a Friend</h2>
        <div className="add-friend-card" style={styles.addFriend}>
          <img style={styles.friendImage} src="" alt="" />
          <div style={styles.inputBtn}>
            <input 
              value={inputText}
              onChange={inputHandler}
              style={styles.input}
              type="text"
              className="input"
              placeholder="Enter email address..."
            ></input>
            <button onClick={()=>handleSearch(inputText)} style={styles.btn}>
              Search
            </button>
          </div>
          <div className="dropdownEmail">
            { data?.users.filter( item => {
              const searchUser = inputText.toLowerCase();
              const userEmail = item.email.toLowerCase();

              return searchUser && userEmail.startsWith(searchUser) && userEmail != searchUser
            })
              .slice(0,10)
              .map((item) => (
                <div 
                onClick = {() => handleSearch(item.email)} 
                className="dropdownRow"
                key={item.email}
                >
                  {item.email}
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyFriends;
