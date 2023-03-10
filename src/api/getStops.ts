import { apiUrl } from ".";

import Axios from "axios";

export default async () => {
    //try {
    console.log("url:", apiUrl);
    const response = await Axios.get(apiUrl + "api/stops/", { withCredentials: true });
    return response.data;
    /*} catch (err) {
        console.log("something wrong happened");
        return {
            code: 0, //get error code,
            message: "blabla",//get error message,
            data: err.response.data,
        };
    } finally {
        console.log("Finally trigered");
    }
    */
};
