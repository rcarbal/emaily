import axios from 'axios';
import { FETCH_USER } from './types'

export const fetchUser = () => async dispatch => {
    console.log("Inside fetchUser");
    const res = await axios.get('/api/current_user');
    console.log(res.data);
    dispatch({ type: FETCH_USER, payload: res.data });

};

export const handleToken = (token) => async dispatch => {
    console.log("Inside handle token")
    const res = await axios.post('api/stripe', token);
    console.log(res.data);
    dispatch({type: FETCH_USER, payload: res.data});
};