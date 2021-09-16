import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Error.module.css";

const ErrorModule = (props) => {
  return (
    <>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.errorHandler}>Okey</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModule;
