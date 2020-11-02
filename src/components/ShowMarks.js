import React from 'react'
import '../css/ShowMarks.css';

const ShowMarks = ({grades})=>{
    const renderMarks = () =>{
        let i = 0 ;
        
        return grades.map(grade => {
            {i++};
            return <div>{`Test${i}.  ${grade}%`}</div>
        })
    }
    return (
        <div className='showmarks'>
        {console.log(grades)}
          {renderMarks()}
        </div>
    )
}

export default ShowMarks
