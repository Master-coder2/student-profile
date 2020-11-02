import React from 'react'
import StudentCard from './StudentCard';

const  StudentCardList = ({data}) => {
    const RenderCards = () =>{
        if(data){
            return data.map(element => {
                return <StudentCard studentdata={element} />
            });
        }
        else{
            return <div>Loding....</div>
        }
    }
    return (
        <div>
           {RenderCards()}
        </div>
    )
}

export default StudentCardList
