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
                               
                            <Link to="/movies">Movies</Link>
                              <Link to="/members">Members</Link>

                         </NavStyle>
                
            </div>
        );
    }
}

export default Nav;

{/* <Link to="/movies"><li>Movies</li></Link>
                                <Link to="/members"><li>Members</li></Link> */}
                                {/* <Link to="/movies"><li>Movies</li></Link>
                                <Link to="/movies"><li>Movies</li></Link> */}