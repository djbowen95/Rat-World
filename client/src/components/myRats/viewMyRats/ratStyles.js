const styles = {
  // I put the * styling and the 'body' styling in here as there isn't an element named either of these things.
  all: {
    boxSizing: "border-box",
    display: "grid",
    placeContent: "center",
    justifyItems: "center",
    minHeight: "100vh",
    margin: "0",
    padding: "1rem",
    lineHeight: "1.5",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#444",
    backgroundColor: "#e4d4f7",
  },

  card: {
    backgroundColor: "#cec9cb",
    borderRadius: "0.5rem",
    boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
    paddingBottom: "1rem",
  },

  cardHeading: {
    marginTop: "1rem",
    fontSize: "1.25rem",
    textAlign: "center",
  },

  // Something went wrong here. Like really wrong.
  cardWrapper: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(25ch, 1fr))",
    gridGap: "1.5rem",
    maxWidth: "100vw",
    width: "80%",
    marginTop: "60px",
  },

  // What is this?
  cardWrapper2: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(30ch, 1fr))",
    gridGap: "1.5rem",
    maxWidth: "100vw",
    width: "120ch",
    marginTop: "40px",
  },

  p: {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    textAlign: "center",
  },

  // Not sure what this is - need to ask Fatumo. Left in for now.
  cardA: {
    color: "inherit",
  },

  progressBar: {
    backgroundColor: "purple",
    width: "70%",
    height: "10px",
    borderRadius: "10px",
  },
  
  progressBarOutline: {
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: "13px",
    padding: "3px",
    lineHeight: "30%",
  },

  ratBum: {
    width: "41%",
  },

  ratBody: {
    width: "33%",
  },

  ratHead: {
    width: "25%",
  }
};

export default styles;
