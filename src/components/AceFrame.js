import { useState } from "react";
import styled from "styled-components";
import AceItem from "./AceItem";
import AceStats from "./AceStats";
//import { equipment } from "../data/equipment";
import equipmentJson from "../data/Equipment.json";
import { stat } from "fs";

// const sampleItem = {
//     name: "Name",
//     slot: "SL",
//     cost: 10000,
//     desc: "This is a sample ACE item description. It might be very long. Though it is not now that strength which in old days moved earth and heavens, that which it is, it is.",
// }

// const sampleItemList = [
//     {
//         name: "item 1",
//         slot: "SL",
//         cost: 10000,
//         desc: "This is a sample ACE item description. It might be very long. +1 Foo.",
//         stats: {
//             foo: 1,
//         },
//     },
//     {
//         name: "item 2",
//         slot: "SL",
//         cost: 12000,
//         desc: "This is a sample ACE item description. It might be very long. +2 Foo.",
//         stats: {
//             foo: 2,
//         },
//     },
//     {
//         name: "item 3",
//         slot: "SL",
//         cost: 14000,
//         desc: "This is a sample ACE item description. It might be very long. -1 Foo.",
//         stats: {
//             foo: -1,
//         },
//     },
//     {
//         name: "item 4",
//         slot: "SL",
//         cost: 16000,
//         desc: "This is a sample ACE item description. It might be very long. +1 Foo, -2 Bar.",
//         stats: {
//             foo: 1,
//             bar: -2,
//         },
//     },
// ]

// const sampleItemList2 = [
//     {
//         name: "item 5",
//         slot: "SL",
//         cost: 10000,
//         desc: "This is a sample ACE item description. It might be very long. -3 Foo.",
//         stats: {
//             foo: -3,
//         },
//     },
//     {
//         name: "item 6",
//         slot: "SL",
//         cost: 12000,
//         desc: "This is a sample ACE item description. It might be very long. +3 Bar.",
//         stats: {
//             bar: 3,
//         },
//     },
//     {
//         name: "item 7",
//         slot: "SL",
//         cost: 14000,
//         desc: "This is a sample ACE item description. It might be very long. No stats.",
//     },
//     {
//         name: "item 8",
//         slot: "SL",
//         cost: 16000,
//         desc: "This is a sample ACE item description. It might be very long. Empty stats.",
//         stats: {
//         },
//     },
// ]

const StyledFrame = styled.div`
    width: 95%;
    min-height: 90vh;
    margin-top: 2.5vw;
    margin-bottom: 2.5vw;
    border: 2px solid firebrick;
    border-radius: 5px;
    background-color: silver;
    box-sizing: border-box;

    h1{
        color: firebrick;
    }

    div.mainbox{
        display: flex;
        flex-wrap: wrap;
        flex-direction: horizontal;
        justify-content: space-evenly;
        align-items: flex-start;
    }
`

//const itemStructure = [{name: "sample item 1", list: sampleItemList}, {name: "sample item 1", list: sampleItemList}, {name: "sample item 2", list: sampleItemList2}];

function AceFrame() {
    const [selections, setSelections] = useState({});

    const items = [
        {
            name: "weight class",
            list: equipmentJson["Weight Class"],
            value: selections["wc"] ?? -1,
            setValue: setSelectionCallbackFor("wc"),
        },
        {
            name: "common feature",
            list: equipmentJson["Common Feature"].sort((first, second) => first.name > second.name),
            value: selections["common"] ?? -1,
            setValue: setSelectionCallbackFor("common"),
        },
        {
            name: "unique feature",
            list: equipmentJson["Unique Feature"].sort((first, second) => first.name > second.name),
            value: selections["unique"] ?? -1,
            setValue: setSelectionCallbackFor("unique"),
        },
        {
            name: "frame feature",
            list: equipmentJson["Frame Feature"].sort((first, second) => first.name > second.name),
            value: selections["frame"] ?? -1,
            setValue: setSelectionCallbackFor("frame"),
        },
        {
            name: "armor",
            list: equipmentJson.Armor.sort((first, second) => first.name > second.name),
            value: selections["armor"] ?? -1,
            setValue: setSelectionCallbackFor("armor"),
        },
        {
            name: "drive",
            list: equipmentJson.Drive.sort((first, second) => first.name > second.name),
            value: selections["drive"] ?? -1,
            setValue: setSelectionCallbackFor("drive"),
        },
        {
            name: "engine",
            list: equipmentJson.Engine.sort((first, second) => first.name > second.name),
            value: selections["engine"] ?? -1,
            setValue: setSelectionCallbackFor("engine"),
        },
        {
            name: "computer",
            list: equipmentJson.Computer.sort((first, second) => first.name > second.name),
            value: selections["computer"] ?? -1,
            setValue: setSelectionCallbackFor("computer"),
        },
        {
            name: "right hand",
            list: equipmentJson["One-Hand"].concat(equipmentJson["Two-Hand"]).sort((first, second) => first.name > second.name),
            value: selections["righthand"] ?? -1,
            setValue: setSelectionCallbackFor("righthand"),
        },
        {
            name: "left hand",
            list: equipmentJson["One-Hand"].concat(equipmentJson["Two-Hand"]).sort((first, second) => first.name > second.name),
            value: selections["lefthand"] ?? -1,
            setValue: setSelectionCallbackFor("lefthand"),
        },
        {
            name: "head",
            list: equipmentJson.Head.concat(equipmentJson.Hardpoint).sort((first, second) => first.name > second.name),
            value: selections["head"] ?? -1,
            setValue: setSelectionCallbackFor("head"),
        },
        {
            name: "shoulder",
            list: equipmentJson.Shoulder.concat(equipmentJson.Hardpoint).concat(equipmentJson["Shoulder Mounted"]).sort((first, second) => first.name > second.name),
            value: selections["shoulder1"] ?? -1,
            setValue: setSelectionCallbackFor("shoulder1"),
        },
        {
            name: "shoulder",
            list: equipmentJson.Shoulder.concat(equipmentJson.Hardpoint).concat(equipmentJson["Shoulder Mounted"]).sort((first, second) => first.name > second.name),
            value: selections["shoulder2"] ?? -1,
            setValue: setSelectionCallbackFor("shoulder2"),
        },
        {
            name: "arm",
            list: equipmentJson.Arm.concat(equipmentJson.Hardpoint).sort((first, second) => first.name > second.name),
            value: selections["arm1"] ?? -1,
            setValue: setSelectionCallbackFor("arm1"),
        },
        {
            name: "arm",
            list: equipmentJson.Arm.concat(equipmentJson.Hardpoint).sort((first, second) => first.name > second.name),
            value: selections["arm2"] ?? -1,
            setValue: setSelectionCallbackFor("arm2"),
        },
        {
            name: "torso",
            list: equipmentJson.Torso.concat(equipmentJson.Hardpoint).sort((first, second) => first.name > second.name),
            value: selections["torso1"] ?? -1,
            setValue: setSelectionCallbackFor("torso1"),
        },
        {
            name: "torso",
            list: equipmentJson.Torso.concat(equipmentJson.Hardpoint).sort((first, second) => first.name > second.name),
            value: selections["torso2"] ?? -1,
            setValue: setSelectionCallbackFor("torso2"),
        },
        {
            name: "leg",
            list: equipmentJson.Leg.concat(equipmentJson.Hardpoint).concat(equipmentJson["Leg [All]"]).sort((first, second) => first.name > second.name),
            value: selections["leg1"] ?? -1,
            setValue: setSelectionCallbackFor("leg1"),
        },
        {
            name: "leg",
            list: equipmentJson.Leg.concat(equipmentJson.Hardpoint).concat(equipmentJson["Leg [All]"]).sort((first, second) => first.name > second.name),
            value: selections["leg2"] ?? -1,
            setValue: setSelectionCallbackFor("leg2"),
        },
        {
            name: "cockpit",
            list: equipmentJson.Cockpit.sort((first, second) => first.name > second.name),
            value: selections["cockpit1"] ?? -1,
            setValue: setSelectionCallbackFor("cockpit1"),
        },
        {
            name: "cockpit",
            list: equipmentJson.Cockpit.sort((first, second) => first.name > second.name),
            value: selections["cockpit2"] ?? -1,
            setValue: setSelectionCallbackFor("cockpit2"),
        },
        {
            name: "cockpit",
            list: equipmentJson.Cockpit.sort((first, second) => first.name > second.name),
            value: selections["cockpit3"] ?? -1,
            setValue: setSelectionCallbackFor("cockpit3"),
        },
    ]

    const stats = {
        price: 0,
        maint: 0,
        armor: 0,
        maneuver: 0,
        heatCap: 0,
        heatLoss: 0,
        speed: 0,
        boost: 0,
        closeTracking: 0,
        rangedTracking: 0,
        sensors: 0,
        response: 0,
        handling: 0,
        systems: 0,
    }

    for (const stat in stats){
            items.forEach(item => {
                stats[stat] += item.list[item.value]?.[stat] ?? 0;
            })
    }

    console.log(stats);

    function setSelectionHandler(name, value){
        setSelections({...selections, [name]:value});
    }

    function setSelectionCallbackFor(name){
        return (value) => setSelectionHandler(name, value)
    }

    // const stats = {}
    // items.forEach(item => 
    // {
    //     const itemstats = item.list[item.value]?.stats;

    //     for(const stat in itemstats){
    //         // for each stat in the item definition, take that stat and add it to `stats`
    //         stats[stat] = itemstats[stat] + (stats[stat] ?? 0);
    //     }
    // });

    //console.log(stats)

    return (
        <StyledFrame>
            <h1>Your ACE</h1>
            <div className="mainbox">
                <AceStats stats={stats} />
                {items.map((itemData, index) => <AceItem props={itemData} key={index} />)}
            </div>
        </StyledFrame>
    );
}

export default AceFrame;