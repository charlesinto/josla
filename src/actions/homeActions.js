import { GET_JOBS } from "../reducers/types";
import axios from "axios";

export const getJobs =  () => {
    return async (dispatch) => {
        const response = await axios.get('/jobs');

        dispatch({
            type: GET_JOBS,
            payload: response.data
        })
    }

}