import React , {useState ,useEffect} from 'react' ;
import { connect } from "react-redux";
import axios from 'axios';
import '../css/App.css'
import SearchByName from './SearchByName';
import {fetchalldata} from '../actions/index'
import FetchedData from '../reducers/FetchedData';

const App = () =>{
     const [data,setData] = useState();
    const  getdata = async () => {
         const fetchedData = await axios.get('https://www.hatchways.io/api/assessment/students');
         setData(fetchedData.data.students);

    }
    useEffect( ()=>{
        getdata();
    },[])
    
    
    return (
        <div className="app">
            <SearchByName data = {data} />
        </div>
        )
}
// // const mapStateToProps = (state) =>{
// //     return {data:state.data}
// // }


// export default connect(mapStateToProps,{fetchalldata})(App);

export default App ;