import React , {useState,useEffect} from 'react'
import StudentCardList from './StudentCardList.js'
import '../css/SearchByName.css'
import { FilterDrama } from '@material-ui/icons';

const SearchByName = ({data}) => {
    console.log('hello in SearchByName');
    console.log(data);
    
    const [filterdata,setFilterdata] = useState([]);
    const [inputName , setInputName] = useState("");  
    const [inputtag , setInputtag] = useState("");
    const have = (pattern , text) =>{
        if(text)
            return text.toLowerCase().indexOf(pattern) ==0 ;
        return false 
    }
    const namesearch = (name ,searchdata) =>{
        const tempdata = searchdata.filter(({firstName,lastName})=>{
            console.log(firstName);
            const fullName = firstName + " " + lastName ;
             return have(name.trim(),firstName) || have(name.trim(),lastName) || have(name.trim(),fullName);
        })
        setFilterdata(tempdata);
        return tempdata ;
    }
    const tagsearch = (tag ,searchdata) =>{
        const tempdata = searchdata.filter(({TagName})=>{
            if(TagName && TagName.find((tagname)=>{
                console.log('tagsnames: ')
                console.log(tagname);
                 return have(tag,tagname) ;
            }))
                return true ;
            return false;
        })
        setFilterdata(tempdata);
    }
    const namehandler = (e) =>{
            const name = e.target.value.toLowerCase();
            setInputName(name);
            
    }
    const taghandler = (e) =>{
        const tag = e.target.value.toLowerCase() ;
        setInputtag(tag);
    }
    useEffect(() => {
       if(!inputName && !inputtag)
            setFilterdata(data);
    }, [data])

    useEffect(() => {
        if(!inputName && !inputtag)
             setFilterdata(data);
        else if(inputName && inputtag){
            const tempdata = namesearch(inputName,data);
            tagsearch(inputtag,tempdata);
        }
        else if(inputName){
            namesearch(inputName,data);
        }
        else{
            tagsearch(inputtag,data);

        }
         console.log(filterdata);
     }, [inputName,inputtag])



    return (
        <div className='searchbyname'>
            <input  onInput={e=>namehandler(e,data)} placeholder="Search By Name" />
            <div className = "seperater"></div>
            <input  onInput={e=>taghandler(e,data)} placeholder="Search By Tag" />
            <div className = "seperater"></div>
            <StudentCardList data={filterdata} />
        </div>
    )
}

export default SearchByName
