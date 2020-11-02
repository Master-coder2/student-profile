import React , {useState} from 'react'
import { connect } from "react-redux";
import {addtag} from '../actions'
import '../css/AddTag.css'
const AddTag = ({id , addtag}) => {
    const [tagName,setTagName] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(tagName){
            addtag(id,tagName);
            console.log(id);
        }
        
    }
    const inputHandler = (e) =>{
        setTagName(e.target.value);
    }
    return (
        <div className="addtag">
            <form onSubmit={handleSubmit}>
                <input  onChange = {inputHandler} placeholder="Add Tag"/>
                <button type='submit'>submmit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) =>{
   console.log(state);
  return {data:state.data}
}


export default connect(mapStateToProps,{addtag})(AddTag);

