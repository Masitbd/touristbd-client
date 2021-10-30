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
      history.push(redirect_url);
    });
  };
  return (
    <div>
      <button className="btn btn-warning " onClick={handleGoogleLogin}>
        Google signin
      </button>
    </div>
  );
};

export default Login;
