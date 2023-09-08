import axios from 'axios';
import React ,{useEffect,useState} from 'react';
import Header from './Header';

import { Senddata } from './Post';
function Delete() {
    const [data, setData] = React.useState([]);
    let get_url = 'http://localhost:3001/try';
    

   //get function but calls axios only on page refresh - Highly Important
    useEffect(() => {
    axios.get(get_url).then((res) => {setData(res.data)});
    }, []);

    function del(data1)
    {
        const put_url= 'http://localhost:3001/delete';
        const deldata ={
            title: data1
        }
        console.log(data1);
        Senddata(deldata,put_url);
       
    }
  return (
    <div >
      <Header />
      <div class="container" >
      {data.map((p,i) => (
      
      
      <div class="card" key={i}>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <div class="face face1">
          <div class="content">
            <span class="stars"></span>
            <h2 class="java1">{p.title}</h2>
            
            <button class="btn" onClick={ () => del(p.title)}><i class="fas fa-trash-alt icon trash-icon"></i></button>
            <br></br>
            <p class="java">{p.content}.</p>
            
          </div>
        </div>
      
      <div class="face face2">
          <h2 class="heading1">{p.title}</h2>
      </div>
      </div>
      
        
      ))}
      </div>
     
    </div>
  );
}

export default Delete;
