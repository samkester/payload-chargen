import styled from "styled-components";

const StyledItem = styled.div`
    width: 18%;
    border: 1px solid firebrick;
    border-radius: 5px;
    margin-bottom: 3vh;
`

export default function AceItem() {
    return (
        <StyledItem>
            <h3>Item name</h3>
            <p>place where the thing goes</p>
            <p>effect/description</p>
        </StyledItem>
    );
}