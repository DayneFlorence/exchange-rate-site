// Layout.js
import React from 'react';
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/"><span className="navbar-brand mb-0 h1">Currency Exchange Rates</span></Link>
      </nav>
      <div className="container py-3 bg-dark">
        {props.children}
      </div>
      <footer className="p-3 bg-dark">
        <div className="mb-2 ">
          
        </div>
        <div>
         
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;