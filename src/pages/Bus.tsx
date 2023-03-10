import getBuses from "../api/getBuses";
import getStops from "../api/getStops";
import useRequests from "../hooks/useRequests";

import LoadingLayout from "../layouts/LoadingLayout";
import ErrorLayout from "../layouts/ErrorLayout";

export default function Bus() {
  const { data, error, loading } = useRequests([getBuses(), getStops()]);

  if (error) return <ErrorLayout />;

  if (loading) return <LoadingLayout />;

  return (
    <div>
      model:
      <div className="map-container"></div>
      <ul>
        {data[0].map((bus: any) => {
          return (
            <li key={bus.id}>
              {bus.name} : {bus.price}
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <br />
      <ul>
        {data[1].map((bus: any) => {
          return (
            <li key={bus.id}>
              {bus.name} : {bus.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
