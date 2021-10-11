import styled from "styled-components/macro";
import {useParams} from "react-router-dom";

function GroupDetailPage(props){

    const {id} = useParams()

    return(
        <StyledContainer>
            asd
        </StyledContainer>
    )

}

export default GroupDetailPage;

const StyledContainer = styled.div`
  margin: 50px 50px 0 100px;
  height: 93vh;
  overflow: auto;
  border: solid 1px;
  border-radius: 5px;
`