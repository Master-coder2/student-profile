import React , {useState,useEffect} from 'react'
import StudentCardList from './StudentCardList.js'
import '../css/SearchByName.css'

const SearchByName = ({data}) => {
    const [filterdata,setFilterdata] = useState([]);
    const [inputName , setInputName] = useState("");  
    const have = (pattern , text) =>{
        return text.toLowerCase().indexOf(pattern) ==0 ;
    }
    const inputhandler = (e) =>{
            const name = e.target.value.toLowerCase();
            setInputName(name);
            const tempdata = data.filter(({firstName,lastName})=>{
                const fullName = firstName + " " + lastName ;
                return have(name.trim(),firstName) || have(name.trim(),lastName) || have(name.trim(),fullName);
            })
            setFilterdata(tempdata);
            if(!e.target.value){
                setFilterdata(data);
            }
    }
    useEffect(() => {
       if(!inputName)
            setFilterdata(data);
        console.log(filterdata);
    }, [data])
    return (
        <div className='searchbyname'>
            <input  onInput={e=>inputhandler(e)} placeholder="Search By Name" />
            <div className = "seperater"></div>
            <StudentCardList data = {filterdata} />
        </div>
    )
}

export default SearchByName
