import {FETCHALLDATA , ADDTAG} from './type';
import axios from 'axios'


export const fetchalldata = () => async (dispatch) =>{
    console.log('hello in action')
    const fetchedData = await axios.get('https://www.hatchways.io/api/assessment/students');
    dispatch({type:FETCHALLDATA, payload: fetchedData.data.students})
};

export const addtag = (id,tagName) => async (dispatch) =>{
    dispatch({ type:ADDTAG , payload :{id,tagName} })
}