import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


let NavStyle = styled.div`

    display: flex;
    justify-content: space-around;
    font-size: 30px;
    text-decoration: none;
    text: green
    list-style-type: none;
`

class Nav extends Component {
    render() {
        return (
            <div>

                
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                </nav>
                </div>
                {/* <NavStyle>
                    
                   <Link to="/movies"><li>Movies</li></Link>
                    <li>Members</li>
                    <li>Movies</li>
                    <li>Test</li>
                </NavStyle> */}
            </div>
        );
    }
}

export default Nav;