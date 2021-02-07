import { ACTIONS } from "../actions";

const initialState = {
    vitals: {
        "Weight Class": 0,
    },
    equipment: [],
    weapons: [],
    vehicles: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type){
        case ACTIONS.ADD_ITEM:
            const equipment = state.equipment ?? [];
            // shuffle equipment however we need to fit the new item in
            equipment.push(action.data.item)
            return {...state, equipment}
        default:
            return state
    }
}