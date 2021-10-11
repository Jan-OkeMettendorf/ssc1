import React from 'react'
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";
import * as Icons from "react-icons/all";

function Groups(props) {

    const history = useHistory();

    return (
        <StyledContainer>
            {props.groupData.map(group => (
                <StyledGroupContainer key={group.id} onClick={() => history.push(`/group/${group.id}`)}>
                    <StyledHeader>{group.title}</StyledHeader>
                    <StyledInformationLeft>Sportart: {group.sport}</StyledInformationLeft>
                    <StyledInformationLeft>Termin: {group.Date} {group.DateTime}</StyledInformationLeft>
                    <StyledInformationLeft>Stadt: {group.region}</StyledInformationLeft>
                    <StyledInformationLeft>Adresse: {group.location}</StyledInformationLeft>
                    <StyledInformationRight>Gebühr: {group.participationFee}</StyledInformationRight>
                    <StyledInformationRight><Icons.RiArrowLeftSFill/> {group.member.length} / {group.CountOfMember} <Icons.RiArrowRightSFill/></StyledInformationRight>
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

const StyledHeader = styled.h1`
  text-align: center;
  font-family: "Open Sans",serif;
`

const StyledInformationLeft = styled.p`
    text-align:left;
  font-family: "Open Sans",serif;
`
const StyledInformationRight = styled.p`
    text-align:right;
  font-family: "Open Sans",serif;
`