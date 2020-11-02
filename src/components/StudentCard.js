import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../css/StudentCard.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShowMarks from './ShowMarks';
import AddTag from './AddTag';
import DisplayTags from './DisplayTags'


const StudentCard = ({studentdata}) =>{
    const [displayAllMarks,setDisplayAllMarks] = useState(false);
    const marksHandler = () =>{
        setDisplayAllMarks(!displayAllMarks)
    }
    const calculateAverage = ( grades ) =>{
        const len = grades.length ;
        let totalGrade = 0 ;
        grades.forEach(grade => {
            totalGrade += parseFloat(grade);
        });
        return totalGrade/len ;
    }
    const RenderAllMarks = () =>{
        if(displayAllMarks){
            return (
                <div>
                    <ShowMarks grades={studentdata.grades} />
                    <DisplayTags id={studentdata.id-1} />
                    <AddTag id={studentdata.id-1}/>
                </div>
            )
        }
    }
    const renderbutton = () =>{
        if(!displayAllMarks){
            return  <AddIcon fontSize='large'/>
        }
        else{
            return  <RemoveIcon fontSize='large'/>
        }
    }
    
    return (
        <div className="studentcard">
            <div className='user'>
                <div className = "userinfo">
                    <div className = "userimage">
                        <Avatar className="large" src ={studentdata.pic}></Avatar>
                    </div>
                    <div className = "userdata">
                        <h1>{`${studentdata.firstName.toUpperCase()} ${studentdata.lastName.toUpperCase()}`}</h1>
                        <div className='userdemography'>
                            <p>{`Email: ${studentdata.email}`}</p>
                            <p>{`Company: ${studentdata.company}`}</p>
                            <p>{`Skill: ${studentdata.skill}`}</p>
                            <p>{`Average: ${calculateAverage(studentdata.grades)}%`}</p>
                        </div>
                    </div>
                </div>
                <div onClick={marksHandler} className='buttonicons'>
                    {renderbutton()}
                </div>
            </div>
            {RenderAllMarks()}
            <div className='seperater'></div>
        </div>
    )
}




export default StudentCard ;