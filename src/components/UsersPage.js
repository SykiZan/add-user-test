import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./UsersPage.module.scss";
const UsersPage = (props) => {
  const users = useSelector((state) => state.users);

  const params = useParams();

  return (
    <div className={classes.content}>
      <span className={classes.info}>{`User number ${params.id}`}</span>
      <span className={classes.user}>{users[parseInt(params.id) - 1]}</span>
    </div>
  );
};

export default UsersPage;
