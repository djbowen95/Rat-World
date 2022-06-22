const styles = {
  // I put the * styling and the 'body' styling in here as there isn't an element named either of these things.
  all: {
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
    borderRadius: "14px",
    boxShadow: "0px 0px 5px black inset",
  },

  card: {
    backgroundColor: "rgb(234, 234, 234)",
    borderRadius: "0.5rem",
    boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "3px groove #e59274",
    width: "49%",
    margin: "5px 0px",
  },

  cardHeading: {
    marginTop: "0px",
    fontSize: "1.25rem",
    textAlign: "center",
  },

  // Something went wrong here. Like really wrong.
  cardWrapper: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
    width: "96%",
    flexWrap: "wrap",
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
    fontSize: "15px"
  },

  // Not sure what this is - need to ask Fatumo. Left in for now.
  cardA: {
    color: "inherit",
  },

  progressBar: {
    backgroundColor: "purple",
    width: "50%",
    height: "10px",
    borderRadius: "10px",
  },
  
  progressBarOutline: {
    width: "50%",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: "13px",
    padding: "3px",
    lineHeight: "30%",
  },

  ratBum: {
    width: "41.6667%",
  },

  ratBody: {
    width: "33.3333%",
  },

  ratHead: {
    width: "25%",
  },

  imgContainer: {
    width: "80%",
    backgroundColor: "ivory",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px black inset",
    border: "3px groove #e59274",
    padding: "0px 10px"
  },

  heading: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60%",
  },

  adoptRatButton: {
    width: "initial"
  }
};



export default styles;
