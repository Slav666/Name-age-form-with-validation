import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "../Users/AddUser.module.css";
import ErrorModule from "../UI/ErrorModule";

const AddUser = (props) => {
  const [addUserName, setAddUserName] = useState("");
  const [addUserAge, setAddUserAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (addUserName.trim().length === 0 || addUserAge.trim().length === 0) {
      return setError({
        title: "Invalid input",
        errorMessage: "Please enter a valid name and age values",
      });
    }
    if (addUserAge < 1) {
      return setError({
        title: "Invalid age",
        errorMessage: "Please enter a valid age value",
      });
    }
    // console.log(addUserName, addUserAge);
    props.onAddUser(addUserName, addUserAge);
    setAddUserName("");
    setAddUserAge("");
  };

  const addUserNameHandler = (event) => {
    setAddUserName(event.target.value);
  };

  const addUserAgeHandler = (event) => {
    setAddUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModule
          title={error.title}
          errorMessage={error.errorMessage}
          errorHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">User Name</label>
          <input
            id="name"
            type="text"
            onChange={addUserNameHandler}
            value={addUserName}
          />
          <label html="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={addUserAgeHandler}
            value={addUserAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
