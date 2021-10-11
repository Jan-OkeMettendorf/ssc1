import React from 'react';
import styled from "styled-components/macro";

function Home(props) {
    return (
        <StyledContainer>
            <StyledHeader>Teasdalkgö,weäögst</StyledHeader>
        </StyledContainer>
    );
}

export default Home;

const StyledContainer = styled.div`
 background-color:red;
  margin-right: 150px;
  margin-left: 150px;
`

const StyledHeader = styled.header`
text-align: center;
`