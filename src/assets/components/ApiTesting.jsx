import useRequest from "../../hooks/useRequest";
import getStatus from "../../api/getStatus";

const ApiTesting = () => {

    //useRequest(getStatus());
    const { data, error, loading } = useRequest(getStatus);

    if (loading) return <div>Loading</div>

    if (error) return <div>error !</div>

    return (
        <div>
            <div>raiden</div>
        </div>
    )
}

export default ApiTesting;