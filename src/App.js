import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  // let [data,setdata]= useState('hello') 
  // let [data1,setdata1]= useState('hello1') 

  // useEffect(()=>{
  //     // setdata('hello');
  //     console.log(data)
  // },[data])

  // const getdata = () => {
  //   setdata('hello welcome')
  // }
  // const getdata1 = () => {
  //   setdata1('hello welcome1')
  // }

  let [val, setval] = useState([])

  axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      console.log(response.data.results);
      setval(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })

    var col;



  return (
    <div className="App">
      {/* <h1>{data}</h1> 
        <h1>{data1}</h1>
         <input type='button' value='cilke hear'  onClick={getdata}></input>
        <input type='button' value='cilke hear1' onClick={getdata1} ></input> */}
      <div className='mm'>
        {
          val.map((ele) => {

            if(ele.status === 'Alive')
            {
              col = 'green'
            }
            if(ele.status === 'Dead')
            {
              col = 'red'
            }
            if(ele.status === 'unknown')
            {
              col = 'yellow'
            }
            return (

              <div className='main-class'>
                <img src={ele.image}></img>
                <div className='contain'>
                  <h1>{ele.name}</h1>
                  <div className='flex'>
                    <h3 className='kk flex'><div className='line ' style={{backgroundColor:col}}></div>{ele.status}-</h3>
                    <h3>{ele.species}</h3>
                  </div>
                  <div className='oo'>
                    <p>Last known location:</p>
                    <h3>{ele.location.name}</h3>
                  </div>
                  <div className='oo'>
                    <p>First seen in:</p>
                    <h3>{ele.origin.name}</h3>
                  </div>

                </div>

              </div>

            );
          })
        }
      </div>
    </div>
  );
}

export default App;
