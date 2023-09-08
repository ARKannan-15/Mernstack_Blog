import React from "react";



function Header() {
  return (
    <header>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"></link>
    <nav class="navbar navbar-custom">
    <div class="container1">
    <div class="navbar-custom">
      <div class="navbar-header">
        
        <p class="navbar-brand">BLOG</p>
      </div>
      
        <ul class="nav navbar-nav navbar-right">
          <li id="home"><a href="/">HOME</a></li>
          <li id="compose"><a href="/compose">COMPOSE</a></li>
          <li id="update"><a href="/update">UPDATE</a></li>
          <li id="update"><a href="/delete">DELETE</a></li>
         </ul>
    </div>
    </div>
    </nav>
    </header>
  );
}

export default Header;
