import { FETCH_USER } from "../actions/types";

export default function(state={}, action){
    console.log("INSIDE AUTH REDUCER");
    console.log(action);
    switch (action.type){
        case FETCH_USER:
            return state;
        default:
            return state;
    } 
}