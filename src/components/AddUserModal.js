import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  };

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
        </div>
      </div>
    </>
  );
};

export default AddUserModal;
