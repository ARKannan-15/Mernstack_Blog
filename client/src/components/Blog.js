import React ,{useEffect,useState} from 'react';
import Header from './Header';

import axios from 'axios';
function Blog(props) {
    const [data, setData] = React.useState([]);
    let get_url = 'http://localhost:3001/try';

   //get function but calls axios only on page refresh - Highly Important
    useEffect(() => {
    axios.get(get_url).then((res) => {setData(res.data)});
    }, []);

  return (
    <div >
      <Header />
      
      <div class="container" >
      {data.map((p,i) => (
      
      
      <div class="card" key={i}>
        <div class="face face1">
          <div class="content">
            <span class="stars"></span>
            <h2 class="java1">{p.title}</h2>
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

export default Blog;
