import { useState } from "react";
import styled from "styled-components";
import AceItem from "./AceItem";
import AceStats from "./AceStats";

// const sampleItem = {
//     name: "Name",
//     slot: "SL",
//     cost: 10000,
//     desc: "This is a sample ACE item description. It might be very long. Though it is not now that strength which in old days moved earth and heavens, that which it is, it is.",
// }

const sampleItemList = [
    {
        name: "item 1",
        slot: "SL",
        cost: 10000,
        desc: "This is a sample ACE item description. It might be very long. +1 Foo.",
        stats: {
            foo: 1,
        },
    },
    {
        name: "item 2",
        slot: "SL",
        cost: 12000,
        desc: "This is a sample ACE item description. It might be very long. +2 Foo.",
        stats: {
            foo: 2,
        },
    },
    {
        name: "item 3",
        slot: "SL",
        cost: 14000,
        desc: "This is a sample ACE item description. It might be very long. -1 Foo.",
        stats: {
            foo: -1,
        },
    },
    {
        name: "item 4",
        slot: "SL",
        cost: 16000,
        desc: "This is a sample ACE item description. It might be very long. +1 Foo, -2 Bar.",
        stats: {
            foo: 1,
            bar: -2,
        },
    },
]

const sampleItemList2 = [
    {
        name: "item 5",
        slot: "SL",
        cost: 10000,
        desc: "This is a sample ACE item description. It might be very long. -3 Foo.",
        stats: {
            foo: -3,
        },
    },
    {
        name: "item 6",
        slot: "SL",
        cost: 12000,
        desc: "This is a sample ACE item description. It might be very long. +3 Bar.",
        stats: {
            bar: 3,
        },
    },
    {
        name: "item 7",
        slot: "SL",
        cost: 14000,
        desc: "This is a sample ACE item description. It might be very long. No stats.",
    },
    {
        name: "item 8",
        slot: "SL",
        cost: 16000,
        desc: "This is a sample ACE item description. It might be very long. Empty stats.",
        stats: {
        },
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

const itemStructure = [{name: "sample item 1", list: sampleItemList}, {name: "sample item 1", list: sampleItemList}, {name: "sample item 2", list: sampleItemList2}];

function AceFrame() {
    const [selections, setSelections] = useState({});

    function setSelectionHandler(name, value){
        setSelections({...selections, [name]:value});
    }

    function setSelectionCallbackFor(name){
        return (value) => setSelectionHandler(name, value)
    }

    const items = itemStructure.map((slot, index) => {
        return {
            name: slot.name,
            list: slot.list,
            value: selections[index] ?? -1,
            setValue: setSelectionCallbackFor(index)
        }
    });

    const stats = {}
    items.forEach(item => 
    {
        const itemstats = item.list[item.value]?.stats;

        for(const stat in itemstats){
            // for each stat in the item definition, take that stat and add it to `stats`
            stats[stat] = itemstats[stat] + (stats[stat] ?? 0);
        }
    });

    //console.log(stats)

    return (
        <StyledFrame>
            <h1>Your ACE</h1>
            <div>
                <AceStats stats={stats} />
                {items.map((itemData, index) => <AceItem props={itemData} key={index} />)}
            </div>
        </StyledFrame>
    );
}

export default AceFrame;