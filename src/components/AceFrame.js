import styled from "styled-components";
import AceItem from "./AceItem";

const sampleItem = {
    name: "Name",
    slot: "SL",
    cost: 10000,
    desc: "This is a sample ACE item description. It might be very long. Though it is not now that strength which in old days moved earth and heavens, that which it is, it is.",
}

const sampleItemList = [
    {
        name: "item 1",
        slot: "SL",
        cost: 10000,
        desc: "This is a sample ACE item description. It might be very long. Though it is not now that strength which in old days moved earth and heavens, that which it is, it is.",
    },
    {
        name: "item 2",
        slot: "SL",
        cost: 12000,
        desc: "This is a sample ACE item description. It might be very long. Though it is not now that strength which in old days moved earth and heavens, that which it is, it is.",
    },
    {
        name: "item 3",
        slot: "SL",
        cost: 14000,
        desc: "This is a sample ACE item description. It might be very long. Though it is not now that strength which in old days moved earth and heavens, that which it is, it is.",
    },
    {
        name: "item 4",
        slot: "SL",
        cost: 16000,
        desc: "This is a sample ACE item description. It might be very long. Though it is not now that strength which in old days moved earth and heavens, that which it is, it is.",
    },
]

const StyledFrame = styled.div`
    width: 95%;
    min-height: 90vh;
    margin-top: 2.5vw;
    margin-bottom: 2.5vw;
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
                <AceItem list={sampleItemList} />
            </div>
        </StyledFrame>
    );
}

export default AceFrame;