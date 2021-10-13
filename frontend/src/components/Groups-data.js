import * as Icons from "react-icons/all";
import React from "react";
import styled from "styled-components/macro";

function GroupsData({group}) {
    return (
        <>
            <StyledHeader>{group.title}</StyledHeader>
            <StyledInformationLeft>
                Sportart: {group.sport}
            </StyledInformationLeft>
            <StyledInformationLeft>
                Termin: {group.Date} {group.DateTime}
            </StyledInformationLeft>
            <StyledInformationLeft>
                Stadt: {group.region}
            </StyledInformationLeft>
            <StyledInformationLeft>
                Adresse: {group.location}
            </StyledInformationLeft>
            <StyledInformationRight>
                Gebühr: {group.participationFee}
            </StyledInformationRight>
            <StyledInformationRight>
                <Icons.RiArrowLeftSFill/>
                {group.member.length} / {group.CountOfMember}
                <Icons.RiArrowRightSFill/>
            </StyledInformationRight>
        </>
    )
}

export default GroupsData


const StyledHeader = styled.h1`
  text-align: center;
  font-family: "Open Sans", serif;
`

const StyledInformationLeft = styled.p`
  text-align: left;
  font-family: "Open Sans", serif;
`
const StyledInformationRight = styled.p`
  text-align: right;
  font-family: "Open Sans", serif;
`