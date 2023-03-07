import { apiUrl } from ".";

import Axios from "axios";

/**
 * contact backend to check if it's alive or not, return a promise with a json in this format inside { status: "working", aliveFrom: number }
 */
/**
 * TODO: create an error handler that gonna transform the error object into the object returned inside of the catch block
 */
export default async (email, password, username) => {
  try {
    console.log("url:", apiUrl);
    const response = await Axios.post(apiUrl + "users/", { email, password, username }, { withCredentials: true });
    return response.data;
  } catch (err) {
    console.log("something wrong happened");
    return {
      code: 0 /**get error code */,
      message: "blabla" /**get error message */,
      data: err.response.data,
    };
  } finally {
    console.log("Finally trigered");
  }
};
