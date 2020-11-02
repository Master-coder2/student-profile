import React from 'react'
import StudentCard from './StudentCard';
import CircularProgress from '@material-ui/core/CircularProgress';

const  StudentCardList = ({data}) => {
    const RenderCards = () =>{
        if(data){
            console.log('studentCardList');
            console.log(data);
            return data.map(element => {
            //    console.log(element +"\n");
                 return <StudentCard studentdata={element} />
            });
        }
        else{
            return (
                <div className="studentcardlist">
                    <CircularProgress color="secondary" />
                </div>
            )
        }
    }
    return (
        <div>
           {RenderCards()}
        </div>
    )
}

export default StudentCardList
