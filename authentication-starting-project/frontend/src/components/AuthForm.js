import { useState } from "react";
import { Form, useSearchParams, Link, useActionData, useNavigation } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  // const [isLogin, setIsLogin] = useState(true);

  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // console.log("isLogin", isLogin);
  const data = useActionData();
    console.log('data AuthForm', data);
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (<li key={err}>{err}</li>))}
          </ul>
        )}
        {data && data.message && (<p>{data.message}</p>)}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          {/* <button onClick={switchAuthHandler} type="button"> */}
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
            {/* </button> */}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Save"}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
