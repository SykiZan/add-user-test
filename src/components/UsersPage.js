import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./UsersPage.module.scss";
const UsersPage = (props) => {
  const users = useSelector((state) => state.users);

  const params = useParams();

  return (
    <div className={classes.content}>
      {parseInt(params.id) - 1 <= users.length &&
        parseInt(params.id) > 0 &&
        users && (
          <>
            <span className={classes.info}>{`User number ${params.id}`}</span>
            <span className={classes.user}>
              {users[parseInt(params.id) - 1]}
            </span>
          </>
        )}
      {users.length === 0 && (
        <div className={classes.error}>No users in DataBase</div>
      )}
      {parseInt(params.id) - 1 > users.length && (
        <div className={classes.error}>No user found</div>
      )}
      {parseInt(params.id) < 1 && (
        <div className={classes.error}>No user found</div>
      )}
    </div>
  );
};

export default UsersPage;
