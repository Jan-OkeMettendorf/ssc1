import React from 'react';
import NavBarData from "./Navigation-data";
import styled from "styled-components/macro";
import {NavLink} from "react-router-dom";
import * as Icons from "react-icons/all";

function Sidebar({showSidebar, handleSidebar}) {
    return (
        <>
            <StyledSidebar showSidebar={showSidebar}>
            <StyledUl>
                    {NavBarData.map(item => (
                        <StyledLi key={item.title}>
                            <StyledNavLink to={item.path} onClick={() => (!showSidebar ? handleSidebar(!showSidebar):"")}>
                                {item.icon}
                                {!showSidebar ? item.title : ""}
                            </StyledNavLink>
                        </StyledLi>
                    ))}
                </StyledUl>
            </StyledSidebar>
        </>
    );
}

export default Sidebar;
const StyledSidebar = styled.div`
    margin: 0;
    background-color: black;
    width: ${props => props.showSidebar ? "50px" : "200px"};
    height: 100vh;
    padding-top: 1px;
    position: absolute;
`
const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  align-content: flex-start;
  flex-direction: column;
  margin-left: 3px;
  color: white;
  padding-left: 0;
`
const StyledLi = styled.li`
  display: flex;
  color:white;
  font-weight: bold;

  justify-content: center;
  align-items: center;
  height: 50px;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: white;
  text-align:center;
  text-decoration: none;
  gap: 15px;
  width: 100%;
  align-items: center;
  height: 100%;
  padding-left: 15px;
  &:hover {
    background-color:white;
    color:black;
    align-self: flex-end;
  }
  
`