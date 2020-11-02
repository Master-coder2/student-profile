import React from 'react';
import {connect} from 'react-redux';
import '../css/DisplayTags.css'


const DisplayTags = ({id,data}) => {
    const renderTags = () =>{
        console.log("--In DisplayTags----")
        const tagNames = data[id]["TagName"];
        if(tagNames){
            return tagNames.map(tagname =>{
                return <div className="tag">{tagname}</div>
            })
        }
    }
    return (
        <div className="displaytags">
            {renderTags()}
        </div>
    )
}
const mapStateToProps = (state) =>{
   return {data:state.data}
 }
 
 
 export default connect(mapStateToProps)(DisplayTags);
