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
        display: block;
    }

    p.title{
        font-size: 1.6rem;

        select{
            font-size: 1.2rem;
            min-width: 50%;
            text-align: center;

            option{
                font-size: 0.8rem;
            }
        }
    }

    p.paragraph{
        text-align: left;
        padding: 0.25em;
        padding-bottom: 0.5em;
        font-size: 1.0rem;
    }
`

export default function AceItem({props}) {
    const item = props.list[props.value];

    const setNumHandler = (event) => {
        props.setValue(event.target.value);
    }

    return (
        <StyledItem>
            <p className="fullwidth title">
                <select onChange={setNumHandler} value={props.value}>
                    <option value="-1">Empty {props.name}</option>
                    {props.list.map((item, index) => 
                        <option value={index} key={item.name}>{item.name}</option>
                    )}
                </select>
            </p>
            {/* <p className="fullwidth title">{item?.name}</p> */}
            <p>{item?.slot}</p>
            <p>{item?.price}</p>
            <p className="fullwidth paragraph">{item?.desc}</p>
            <p>{item?.base}</p>
            <p>{item?.mult}</p>
            <p>{item?.heat}</p>
            <p>{item?.diff}</p>
            <p className="fullwidth paragraph">{item?.features}</p>
        </StyledItem>
    );
}