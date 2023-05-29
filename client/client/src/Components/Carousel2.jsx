import React from "react";
import Category from "../Images/Category.gif";
import MenuButton from "./MenuButton";

function Carousel2() {
  const styles = {
    bgColor: {
        backgroundColor: "rgb(247, 35, 35)",
        backgroundImage: "linear-gradient(rgb(247, 35, 35), rgb(238, 46, 46))",
    },
    con: {
      margin: "2rem",
      marginTop: "0.2rem",
      display: "flex",
      alignItems: "center"
    },
    textCon: {
      marginTop: "4rem",
    },
    textCon2: {
      marginTop: "4rem",
      marginBottom: "4rem",
      margin: "1rem",
    },
  };

  const desc =
    "Welcome to our online restaurant where you can indulge in a variety of mouth-watering dishes. From classic comfort foods to innovative culinary creations, we have it all. Order now and treat yourself to a delectable meal that will tantalize your taste buds!";

  return (
    <div className="row purple-text" style={styles.con}>
      <div
        className="col l6 s12 hide-on-med-and-down left-align"
        style={styles.textCon}
      >
        <h2 className="">CATEGORIES</h2>
        <h5 className=""></h5>
      </div>
      <div className="col l6 m0 s0 hide-on-med-and-down">
        <img src={Category} alt="" />
      </div>
    </div>
  );
}

export default Carousel2;