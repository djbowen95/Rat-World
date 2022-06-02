import React from 'react'

const MyFriends = () => {

    const styles = {
        friendsCards: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
        },
        friendImage: {
            border: "2px solid",
            padding: "60px",
            borderRadius: "50%"
        }
    }

    return (
        <div>
            <section className="friends-container">
                <h2>My Friends</h2>
                <div className="friends-cards" style={styles.friendsCards}>
                    <div className="single-cards">
                        <img style={styles.friendImage} src="" alt="friend 1"/>
                        <h3>Username</h3>
                    </div>

                    <div>
                        <img style={styles.friendImage} src="" alt="friend 1"/>
                        <h3>Username</h3>
                    </div>

                    <div>
                        <img style={styles.friendImage} src="" alt="friend 1"/>
                        <h3>Username</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyFriends
