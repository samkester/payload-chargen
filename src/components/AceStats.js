import styled from "styled-components";

const StyledStats = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 95%;
    border: 1px solid firebrick;
    border-radius: 5px;
    margin-bottom: 3vh;

    div{
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        font-size: 1.2rem;
    }

    p{
        width: 10%;
        margin: 0;
    }

    .large{
        font-size: 1.4rem;
    }
`

export default function AceStats({stats}) {
    // function DisplayStats(){
    //     // this could be a .map if stats was an array, but it's not, so it isn't
    //     const result = []
    //     for(const stat in stats){
    //         result.push(<p key={stat}>{stat}: {stats[stat]}</p>)
    //     }
    //     return result;
    // }

    return(
        <StyledStats>
            <div className="large">
                <p>Price: {stats.price}</p>
                <p>Maintenance: {stats.maint}</p>
            </div>
            <div>
                <p>Armor: {stats.armor}</p>
                <p>Maneuverability: {stats.maneuver}</p>
                <p>Heat Cap: {stats.heatCap}</p>
                <p>Heat Loss: {stats.heatLoss}</p>
                <p>Speed: {stats.speed}/{stats.boost}</p>
            </div>
            <div>
                <p>Close Tracking: {stats.closeTracking}</p>
                <p>Ranged Tracking: {stats.rangedTracking}</p>
                <p>Sensors: {stats.sensors}</p>
                <p>Response: {stats.response}</p>
                <p>Handling: {stats.handling}</p>
                <p>Systems: {stats.systems}</p>
            </div>
            {/* {DisplayStats()} */}
        </StyledStats>
    )
}