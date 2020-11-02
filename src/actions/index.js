import {FETCHALLDATA} from './type';
import axios from 'axios'


export const fetchalldata = () => async (dispatch) =>{
    const fetchedData = await axios.get('https://www.hatchways.io/api/assessment/students');
    dispatch({type:FETCHALLDATA, payload: fetchedData.data.students})
};