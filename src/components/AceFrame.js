import styled from "styled-components";
import AceItem from "./AceItem";

const StyledFrame = styled.div`
    width: 95%;
    height: 90vh;
    border: 2px solid firebrick;
    border-radius: 5px;
    background-color: silver;

    h1{
        color: firebrick;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        flex-direction: horizontal;
        justify-content: space-evenly;
        align-items: flex-start;
    }
`

function AceFrame() {
    return (
        <StyledFrame>
            <h1>Your ACE</h1>
            <div>
                <AceItem />
                <AceItem />
                <AceItem />
                <AceItem />
                <AceItem />
                <AceItem />
                <AceItem />
                <AceItem />
                <AceItem />
                <AceItem />
            </div>
        </StyledFrame>
    );
}

export default AceFrame;