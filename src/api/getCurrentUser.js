import { apiUrl } from ".";

import Axios from "axios";

/**
 * axios.get(people)
    .then((response) => {
        // Success
    })
    .catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the 
            // browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
 */

/**
 * contact backend to check if it's alive or not, return a promise with a json in this format inside { status: "working", aliveFrom: number }
 */
/**
 * TODO: create an error handler that gonna transform the error object into the object returned inside of the catch block
 */
export default async () => {
  //try {
  console.log("url:", apiUrl);
  const response = await Axios.get(apiUrl + "api/users/me", { withCredentials: true });
  return response.data;
  /*} catch (err) {
    console.log("something wrong happened");
    return {
      code: 0,//get error code
      message: "blabla", //get error message
  data: err.response.data,
    };
  } finally {
  console.log("Finally trigered");
}*/
};
