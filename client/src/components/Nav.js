import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


let NavStyle = styled.div`

    display: flex;
    justify-content: space-around;
    font-size: 30px;
    text-decoration: none;
    list-style-type: none;
    padding-left: 25px;
`

class Nav extends Component {
    render() {
        return (
            <div>
                        <NavStyle>
                               
                            <Link to="/">Home</Link>
                            <Link to="/movies">Movies</Link>
                            <Link to="/members">Members</Link>
                            <Link to="/mypage">My Page</Link>


                         </NavStyle>
                
            </div>
        );
    }
}

export default Nav;

