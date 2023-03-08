import "../CSS/ApiTesting.css"

import { useState, useRef, useCallback, useMemo } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from "@react-google-maps/api"

import { useLoadScript } from "@react-google-maps/api";

import getStatus from "../../api/getStatus";
import useRequest from "../../hooks/useRequest";

/*AIzaSyD91R0J8azYJEx1si4G5dXayCCLaePL3MA*/


const ApiTesting = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyD91R0J8azYJEx1si4G5dXayCCLaePL3MA",
        libraries: ["places"]
    });

    const center = useMemo({ lat: 43, lng: -80 }, []);

    //useRequest(getStatus());
    const { data, error, loading } = useRequest(getStatus);

    if (loading) return <div>Loading</div>

    if (error) return <div>error !</div>

    if (!isLoaded) return <div>Loading Map...</div>

    return (
        <div>
            <div>{JSON.stringify(data)}</div>
            <div>
                <GoogleMap zoom={10} center={center} mapContainerClassName="map-container"></GoogleMap>
            </div>
        </div>
    )
}

export default ApiTesting;