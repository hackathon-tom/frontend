import React from "react";

import "../assets/CSS/Signup.css";

import { BsEye } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLogin } from "react-icons/md";

import Input from "../components/Input";

import Button from "../components/Button";
import Axios from "axios";
import signup from "../api/signup";
import useRequest from "../hooks/useRequest";
import { ApplicationContext } from "../context/ApplicationContext";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

export default function Login() {
  const context = React.useContext(ApplicationContext);
  const [loading, setLoading] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");

  const handleClick = async () => {
    setLoading(true);
    signup({ email, username, password })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("ERROOOOR");
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="signup-page">
      <div className="signup-page-left">
        <div className="signup-texts">
          <div className="signup-title">Nice To Meet you !</div>
          <div className="signup-description">
            Lorem ipsum dolor sit amet consectetur.Ultrices consectetur vehicula
            viverra morbi.
          </div>
        </div>
        <div className="signup-page-main-content">
          <div className="signup-page-inputs">
            <Input
              value={email}
              setValue={setEmail}
              leftIcon={<HiOutlineMail color="#667085" size={20} />}
              label={"Email"}
              placeholder={"example@mail.com"}
            />
            <Input
              value={username}
              setValue={setUsername}
              label={"Username"}
              placeholder={"John Doe"}
            />
            <PasswordInput value={password} setValue={setPassword} />
            <PasswordInput
              value={passwordConfirmation}
              setValue={setPasswordConfirmation}
            />
          </div>
          <div className="signup-signup">
            Already have an account ?{" "}
            <span className="signup-signup-button">
              <Link to={"/login"}>Log-in</Link>
            </span>
          </div>
        </div>
        <div className="signup-button">
          <Button
            onClick={handleClick}
            leftIcon={<MdOutlineLogin color="white" size={24} />}
          >
            {loading ? "loading..." : "Signup"}
          </Button>
        </div>
      </div>
      <div className="signup-page-right">
        <div className="hero-image" />
      </div>
    </div>
  );
}
