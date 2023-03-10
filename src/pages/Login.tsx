import React from "react";

import "../assets/CSS/Login.css";

import { BsEye } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLogin } from "react-icons/md";

import Input from "../components/Input";

import Button from "../components/Button";
import login from "../api/login";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../context/ApplicationContext";
import PasswordInput from "../components/PasswordInput";

import { languages } from "../utils/constants";

export default function Login() {
  const context = React.useContext(ApplicationContext)!;
  const language = context!.content.language;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleClick = () => {
    setLoading(true);
    login({ email, password })
      .then((response) => {
        console.log(response);
        context.setUser(response);
        context.pushNotification({
          id: String(Math.random() * 1024),
          title: "login success",
          description: "ouraaaah",
        });
      })
      .catch((err) => {
        setError(err.message);
        context.pushNotification({
          id: String(Math.random() * 1024),
          title: "login failed",
          description: "ouraaaah",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login-page">
      <div className="login-page-left">
        <div className="login-texts">
          <div className="login-title">{languages[language].login.title}</div>
          <div className="login-description">
            {languages[language].login.description}
          </div>
        </div>
        <div className="login-page-main-content">
          <div className="login-page-inputs">
            <Input
              value={email}
              setValue={setEmail}
              leftIcon={<HiOutlineMail color="#667085" size={20} />}
              label={"Email"}
              placeholder={"example@mail.com"}
            />
            <PasswordInput value={password} setValue={setPassword} />
          </div>
          <div className="login-signup">
            Don’t have an account ?{" "}
            <span className="login-signup-button">
              <Link to={"/signup"}>Sign-up</Link>
            </span>
          </div>
          <div className="login-error">{error}</div>
        </div>
        <div className="login-button">
          <Button
            onClick={handleClick}
            leftIcon={<MdOutlineLogin color="white" size={24} />}
          >
            {loading ? "Loading.." : "Login"}
          </Button>
        </div>
      </div>
      <div className="login-page-right">
        <div className="hero-image" />
      </div>
    </div>
  );
}
