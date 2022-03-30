import { types } from "../types";
const initialState={
    prueba:"Hola ",
    prueba1:"dos",
    hola:"45",
}
const clansReducer =(state=initialState, action:{ payload:any ; type:string }
    )=>{
switch (action.type) {
    case types.GET_CLANS:
        return{
            ...state,
        }
        
    default:
        return state;
}
};
export default clansReducer;