import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./AddUserModal.module.scss";

const AddUserModal = (props) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: userName });
    props.handleModal();
    notify();
  };

  const notify = () =>
    toast.success("🦄 User added!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <div className={classes.backdrop} onClick={props.handleModal}></div>
      <div className={classes.wrapper}>
        <div className={classes.modal}>
          <label htmlFor="" className={classes.label}>
            User Name
          </label>
          <input
            type="text"
            className={classes.input}
            onChange={handleUserName}
            onKeyPress={handleKeyPress}
          />
          <button className={classes["add-btn"]} onClick={handleAdd}>
            Add User
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AddUserModal;
