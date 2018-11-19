import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Splash extends Component {
    render() {
        return (
            <div>
                           
               <Link to="/login"><button>Enter</button></Link>
            
              
            </div>
        );
    }
}

export default Splash;