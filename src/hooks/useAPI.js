import { useEffect, useReducer } from "react";

import { fetchReducer } from "./reducers";

const initialState = {
    isLoading: false,
    isError: false,
    data: []
};

function useAPI({ url }) {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({
                type: "FETCH_INIT"
            });
            try {
                const result = await fetch(`${url}`).then(resp => resp.json());
                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: result
                });
            } catch (error) {
                dispatch({
                    type: "FETCH_FAILURE"
                });
            }
        };

        fetchData();
    }, [url]);

    return state;
}

export default useAPI;
