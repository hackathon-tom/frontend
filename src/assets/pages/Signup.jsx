import React from 'react'

import "../CSS/Signup.css"

import { BsEye } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineLogin } from "react-icons/md";

import Input from '../components/Input'

import Button from '../components/Button';

export default function Login() {
  return (
    <div className='signup-page'>
      <div className='signup-page-left'>
        <div className='signup-texts'>
          <div className='signup-title'>Nice To Meet you !</div>
          <div className='signup-description'>Lorem ipsum dolor sit amet consectetur.Ultrices consectetur vehicula viverra morbi.</div>
        </div>
        <div className='signup-page-main-content'>
          <div className='signup-page-inputs'>
            <Input leftIcon={<HiOutlineMail color="#667085" size={20} />} label={"Email"} placeholder={"example@mail.com"} />
            <Input label={"Username"} placeholder={"John Doe"} />
            <Input inputType={"password"} rightIcon={<BsEye color="#667085" size={20} />} label={"Password"} placeholder={"●●●●●●●●"} />
            <Input inputType={"password"} rightIcon={<BsEye color="#667085" size={20} />} label={"Confirm Password"} placeholder={"●●●●●●●●"} />
          </div>
          <div className='signup-signup'>Already have an account ? <span className='signup-signup-button'>Log-in</span></div>
        </div>
        <div className='signup-button'>
          <Button leftIcon={<MdOutlineLogin color="white" size={24} />}>Signup</Button>
        </div>
      </div>
      <div className='signup-page-right'>
        <div className="hero-image" />
      </div>
    </div>
  )
}
