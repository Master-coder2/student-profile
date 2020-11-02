import  { ADDTAG, FETCHALLDATA } from '../actions/type';
export default (state=[]  , action) =>{
    switch(action.type){
        case FETCHALLDATA :
            return [...state,...action.payload] ;
        case ADDTAG:
            const newstate = [...state];
            if(newstate[action.payload.id]["TagName"])
                newstate[action.payload.id]["TagName"] = [...newstate[action.payload.id]["TagName"],action.payload.tagName] 
            else
            newstate[action.payload.id]["TagName"] = [action.payload.tagName]
            return newstate ;
        default :
            return state ;
    }
}