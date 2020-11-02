import React , {useState ,useEffect} from 'react' ;
import { connect } from "react-redux";
import axios from 'axios';
import '../css/App.css'
import SearchByName from './SearchByNameAndTag';
import {fetchalldata} from '../actions/index'

const App = ({fetchalldata , data}) =>{
    //  const [data,setData] = useState();
    const  getdata = async () => {
       fetchalldata();
    }
    useEffect( ()=>{
        getdata();
    },[])
    
    
    return (
        <div className="app">
        {console.log("-- In App----")}
           { console.log(data)}
           <SearchByName data = {data} />
        </div>
        )
}
const mapStateToProps = (state) =>{
   
    return {data:state.data}
}


export default connect(mapStateToProps,{fetchalldata})(App);
