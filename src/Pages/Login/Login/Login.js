import React from "react";
import { getAuth } from "firebase/auth";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      console.log("Check user", result.displayName);
      history.push(redirect_url);
    });
  };
  return (
    <div>
      <button
        className="btn btn-warning my-3 px-3 py-3 text-white "
        onClick={handleGoogleLogin}
      >
        Google signing
      </button>
    </div>
  );
};

export default Login;
