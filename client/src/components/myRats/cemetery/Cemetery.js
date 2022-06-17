import React from "react";

const Cemetery = () => {
  const styles = {
      deadRat: {
        textAlign: "center"
      },
    img: {
        width: "60%"
      },
    text: {
        fontSize: "18px"
    },
    rip: {
        fontSize: "30px"
    }
  };

  return (
    <section>
      <div style={styles.deadRat}>
        <img
            style={styles.img}
          src="https://thumbs.dreamstime.com/b/scientist-mouse-dead-mouse-scientist-mouse-dead-mouse-vector-illustration-cartoon-scientist-mouse-revive-dead-173923659.jpg"
          alt="dead rat"
        />
        <div>
          <div style={styles.text}>
            Losing an animal companion such as a rat is a lot harder than it
            sounds.
            <p>
              You have loved your rat as much as you would have loved a friend,
              or maybe more.
            </p>
          </div>
          <p className="RIP" style={styles.rip}>RIP 🐀</p>
        </div>
      </div>
    </section>
  );
};

export default Cemetery;
