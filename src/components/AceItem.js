import { useState } from "react";
import styled from "styled-components";

const StyledItem = styled.div`
    display: flex;
    width: 18%;
    border: 1px solid firebrick;
    border-radius: 5px;
    margin-bottom: 3vh;

    p{
        font-size: 1.2rem;
        width: 50%;
        margin: 0;
    }

    p.fullwidth{
        width: 100%;
    }

    p.title{
        font-size: 1.6rem;
    }

    p.paragraph{
        text-align: left;
        padding: 0.25em;
        padding-bottom: 0.5em;
    }
`

export default function AceItem({list}) {
    const [num, setNum] = useState(1);

    const item = list[num];

    const setNumHandler = (event) => {
        setNum(event.target.value)
    }

    return (
        <StyledItem>
            <select onChange={setNumHandler} value={num}>
                {list.map((item, index) => 
                    <option value={index}>{item.name}</option>
                )}
            </select>
            <p className="fullwidth title">{item?.name}</p>
            <p>{item?.slot}</p>
            <p>{item?.cost}</p>
            <p className="fullwidth paragraph">{item?.desc}</p>
        </StyledItem>
    );
}