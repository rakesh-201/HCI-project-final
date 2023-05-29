import React from "react";
import Podcast from "../Images/Podcast.gif";
import MenuButton from "./MenuButton";

function Carousel({ setMain }) {
  const styles = {
    bgColor: {
      backgroundColor: "rgb(247, 35, 35)",
      backgroundImage: "linear-gradient(rgb(247, 35, 35), rgb(238, 46, 46))",
    },
    con: {
      margin: "2rem",
      marginTop: "0.2rem",
      display: "flex",
      alignItems: "center",
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
    "Welcome to LinguaLink, the ultimate language skills improvement app. Whether you're a beginner or an advanced learner, our cutting-edge technology and immersive conversational approach will take your language proficiency to new heights. Start your journey to fluency today with LinguaLink and unlock a world of linguistic possibilities.";

  return (
    <div className="row purple-text" style={styles.con}>
      <div
        className="col l6 s12 hide-on-med-and-down left-align"
        style={styles.textCon}
      >
        <h2 className="">LinguaLink</h2>
        <h5 className="">Unlock Fluency, Unleash Potential</h5>
        <p className="">{desc}</p>
        <div className="d-flex align-items-center justify-content-center ">
          <MenuButton />
        </div>
      </div>
      <div className="col l6 m0 s0 hide-on-med-and-down">
        <img src={Podcast} alt="" />
      </div>
    </div>
  );
}

export default Carousel;
