import { useEffect } from "react";
import { ActionTypes } from "../../state/action-types";
import useApiRequest from "../../state/useApi";

const RoomList = () => {
  const [state, makeRequest] = useApiRequest(
    `${process.env.REACT_APP_BACKEND_URL}/rooms`
  );

  useEffect(() => {
    (async function () {
      await makeRequest();
    })();
  }, []);

  return (
    <>
      <div>
        {state.status === ActionTypes.FETCHING && <div>Loading...</div>}
      </div>

      <div>
        {state.status === ActionTypes.SUCCESS && (
          <ul>
            {state.response.data.map((room: any) => (
              <li key={room.id}>{room.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default RoomList;
