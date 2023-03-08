import React from 'react'

import "../CSS/Login.css"

import { BsEye } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineLogin } from "react-icons/md";

import Input from '../components/Input'

import Button from '../components/Button';

export default function Login() {
  return (
    <div className='login-page'>
      <div className='login-page-left'>
        <div className='login-texts'>
          <div className='login-title'>Welcome Back !</div>
          <div className='login-description'>Lorem ipsum dolor sit amet consectetur.Ultrices consectetur vehicula viverra morbi.</div>
        </div>
        <div className='login-page-main-content'>
          <div className='login-page-inputs'>
            <Input leftIcon={<HiOutlineMail color="#667085" size={20} />} label={"Email"} placeholder={"example@mail.com"} />
            <Input inputType={"password"} rightIcon={<BsEye color="#667085" size={20} />} label={"Password"} placeholder={"●●●●●●●●"} />
          </div>
          <div className='login-signup'>Don’t have an account ?<span className='login-signup-button'>Sign-up</span></div>
        </div>
        <div className='login-button'>
          <Button leftIcon={<MdOutlineLogin color="white" size={24} />}><p>Login</p></Button>
        </div>
      </div>
      <div className='login-page-right'>
        <div className="hero-image" /></div>
      </div>
  )
}
