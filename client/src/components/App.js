import React ,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';

import Blog from './Blog';
import Compose from './Compose';
import Update from './Update';
import Delete from './Delete';


function App() {
  // const [data, setData] = React.useState([]);
  //   let get_url = 'http://localhost:3001/';

  //  //get function but calls axios only on page refresh - Highly Important
  //   useEffect(() => {
  //   axios.get(get_url).then((res) => {setData(res.data)});
  //   }, []);

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/">
      <Blog />
      </Route>
      <Route path="/compose">
        <Compose />
      </Route>
      <Route path="/update">
        <Update />
      </Route>
      <Route path="/delete">
        <Delete />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
