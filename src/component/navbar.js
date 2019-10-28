import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    // state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <Link className="navbar-brand" to="/">
                    <img src="https://yts.lt/assets/images/website/logo-YTS.svg" alt="Yts Logo"/>
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/movies">Borwse Movies</Link>
                      </li>
                    </ul>
                  
                  </div>
                </nav>
              </div>
         );
    }
}
 
export default Navbar;