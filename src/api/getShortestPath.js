import { apiUrl } from ".";

import Axios from "axios";

export default async ({ lat1, long1, lat2, long2 }) => {
    console.log("url:", apiUrl);
    const response = await Axios.post(apiUrl + "api/navigation/shortest-path/", { "latitude-1": lat1, "longitude-1": long1, "latitude-2": lat2, "longitude-2": long2 }, { withCredentials: true });
    return response.data;
};
