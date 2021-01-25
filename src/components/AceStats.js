import styled from "styled-components";

const StyledStats = styled.div`
    display: flex;
    width: 18%;
    border: 1px solid firebrick;
    border-radius: 5px;
    margin-bottom: 3vh;

    p{
        font-size: 1.2rem;
        width: 100%;
        margin: 0;
    }

    h3{
        color: firebrick;
        margin-top: 0;
    }

    h3:last-child{
        margin-bottom: 0.15em;
    }
`

export default function AceStats({stats}) {
    function DisplayStats(){
        // this could be a .map if stats was an array, but it's not, so it isn't
        const result = []
        for(const stat in stats){
            result.push(<p key={stat}>{stat}: {stats[stat]}</p>)
        }
        return result;
    }

    return(
        <StyledStats>
            <h3>Statistics</h3>
            {DisplayStats()}
        </StyledStats>
    )
}