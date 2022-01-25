import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./MainNav.module.scss";

const MainNav = () => {
  const history = useHistory();

  return (
    <nav className={classes["main-nav"]}>
      <button
        className={classes["nav-btn"]}
        onClick={() => {
          history.push("/main-page");
        }}
      >
        Main Page
      </button>
    </nav>
  );
};

export default MainNav;
