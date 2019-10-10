import { GET_JOBS } from "./types";
const INITIAL_STATE = {jobs:[]}
export default (state = INITIAL_STATE, actions) => {
    switch(actions.type){
        case GET_JOBS:
            return {...state, jobs: actions.payload}
        default:
            return {...state}
    }
}