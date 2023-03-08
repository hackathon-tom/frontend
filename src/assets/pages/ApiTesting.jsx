import "../CSS/ApiTesting.css"

import getStatus from "../../api/getStatus";
import useRequest from "../../hooks/useRequest";
import Input from "../components/Input";

import { BsEye } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineLogin } from "react-icons/md";
import Button from "../components/Button";

/*AIzaSyD91R0J8azYJEx1si4G5dXayCCLaePL3MA*/


const ApiTesting = () => {

    /*
    const { data, error, loading } = useRequest(getStatus);

    if (loading) return <div>Loading</div>

    if (error) return <div>error !</div>
    */

    return (
        <div className="ApiTesting">
            <Input leftIcon={<HiOutlineMail color="#667085" size={20} />} label={"Email"} placeholder={"example@mail.com"} />
            <Input inputType={"password"} rightIcon={<BsEye color="#667085" size={20} />} label={"Password"} placeholder={"●●●●●●●●"} />
            <Button leftIcon={<MdOutlineLogin color="white" size={24} />}>Login</Button>
        </div>
    )
}

export default ApiTesting;