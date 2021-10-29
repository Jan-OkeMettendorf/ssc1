import React from 'react'
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";
import GroupsData from "../components/Groups-data";


function Groups(props) {

    const history = useHistory();

    return (
        <StyledContainer>
            {props.groupData.map(group => (
                <StyledGroupContainer key={group.id} onClick={() => history.push(`/group/${group.id}`)}>
                    <GroupsData group={group}/>
                </StyledGroupContainer>
            ))}
        </StyledContainer>
    );
}

export default Groups;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 50px 50px 0 100px;
  height: 93vh;
  overflow: auto;
`

const StyledGroupContainer = styled.div`
  border: 1px solid;
  border-radius: 5px;
  padding: 15px;
  &:hover {
    background-color: black;
    color: white;
    animation-delay: 5s;
    opacity: 0.8;
  }
`