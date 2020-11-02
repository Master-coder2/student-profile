import  { FETCHALLDATA } from '../actions/type';
export default (state={students:[]}  , action) =>{
    switch(action.type){
        case FETCHALLDATA :
            console.log('hello in fetchalldata reducer')
            console.log(action.playload);
            return {...state , students:[...state.students,action.playload]};
        default :
            return state ;
    }
}