import { types } from "../types";
const initialState = {
    clansFilter: {}
}
const clansReducer = (state = initialState, action: { payload: any; type: string }
) => {
    switch (action.type) {
        case types.GET_CLANS:
            return {
                ...state,
                clansFilter:action.payload   
            }
        default:
            return state;
    }
};
export default clansReducer;