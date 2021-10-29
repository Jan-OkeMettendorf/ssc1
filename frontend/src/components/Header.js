import React from 'react';
import {NavLink} from "react-router-dom";
import * as Icons from "react-icons/all";
import styled from "styled-components/macro";

function Header({handleSidebar, showSidebar}) {

    return (
        <StyledHeader>
            <StyledNavLink to="#" onClick={() => handleSidebar(!showSidebar)}>
                {showSidebar ? <Icons.HiMenu/> : <Icons.HiX/>}
            </StyledNavLink>
            <StyledNavLink to="/home">
                simple-sports-club
            </StyledNavLink>
            <StyledNavLink to="/login">
                <Icons.HiLogin/>
            </StyledNavLink>
        </StyledHeader>
    );
}

export default Header;

const StyledHeader = styled.header`
  display:grid;
  background-color: black;
  width: 100vw;
  height: 30px;
  grid-template-columns: 35px 1fr 35px;
  padding:5px;
`

const StyledNavLink = styled(NavLink)`
  justify-content: center;
  color: white;
  text-align:center;
  margin: 5px;
  text-decoration: none;
  font-family: "Open Sans",serif;
`