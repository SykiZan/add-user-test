import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import usersStore from "../store/store";
import AddUserModal from "./AddUserModal";
import classes from "./MainPage.module.scss";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  const users = useSelector((state) => state.users);

  const history = useHistory();

  console.log(users);

  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal((prev) => !prev);
  };

  const navigateToUser = (id) => {
    history.push(`/user/${id + 1}`);
  };

  return (
    <>
      <div className={classes.content}>
        <div className={classes.table}>
          <button className={classes["add-btn"]} onClick={handleModal}>
            Add New User
          </button>
          <div className={classes["table-head"]}>
            <span className={classes["number-head"]}>№</span>
            <span className={classes["user-head"]}>User</span>
          </div>
          {users &&
            users.map((user, i) => (
              <div
                className={classes["table-row"]}
                key={i}
                onClick={() => {
                  navigateToUser(i);
                }}
              >
                <span className={classes["number-row"]}>{i + 1}</span>
                <span className={classes["user-row"]}>{user}</span>
              </div>
            ))}
        </div>
        {isModal && <AddUserModal handleModal={handleModal} />}
      </div>
      <ToastContainer />
    </>
  );
};

export default MainPage;
