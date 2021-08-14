import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "UserInput":
      return { value: action.val, isValid: state.isValid };
    case "BlurInput":
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return state;
  }
};

const pwdReducer = (state, action) => {
  switch (action.type) {
    case "PassWordInput":
      return { value: action.val, isValid: state.isValid };
    case "BlurPassword":
      return { value: state.value, isValid: state.value.trim().length > 6 };
    default:
      return state;
  }
};

const Login = (props) => {
  const emailIniitialState = {
    value: "",
    isValid: undefined,
  };

  const pwdInitialState = {
    value: "",
    isValid: undefined,
  };

  const [emailState, dispathEmail] = useReducer(
    emailReducer,
    emailIniitialState
  );

  const [pwdState, dispathPassword] = useReducer(pwdReducer, pwdInitialState);
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const ctx = useContext(AuthContext);
  const emailChangeHandler = (event) => {
    dispathEmail({ type: "UserInput", val: event.target.value });
  };

  const { isValid: emailValid } = emailState;
  const { isValid: pwdValid } = pwdState;

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log("effect is working");
      setFormIsValid(emailValid && pwdValid);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailValid, pwdValid]);

  const passwordChangeHandler = (event) => {
    dispathPassword({ type: "PassWordInput", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispathEmail({ type: "BlurInput" });
  };

  const validatePasswordHandler = () => {
    dispathPassword({ type: "BlurPassword" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, pwdState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          htmlFor="email"
          label="email"
          type="email"
          id="email"
          isValid={emailValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          htmlFor="pwd"
          label="pwd"
          type="password"
          id="password"
          isValid={pwdValid}
          value={pwdState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
