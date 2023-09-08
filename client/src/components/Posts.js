import React ,{useEffect,useState} from 'react';
import Header from './Header';
import Footer from './Footer';

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
      {data.map((p,i) => (
        <div className="note">
          {/* {
            if()
          } */}
          <h6>{p.title}</h6>
          <p>{p.content}</p>
          <a href="/posts/">Read More</a>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Posts;
