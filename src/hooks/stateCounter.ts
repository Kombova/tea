import { useReducer } from "react";
const initialState = {count: 0};
export function reducer(state:any,action:any){
    switch (action.type) {
        case 'increment':
            return{
                ...state,
                count: state.count + 1
            }  
            break;
        case 'decrement':
            return{
                ...state,
                count: state.count - 1
            }  
            break;
    
        default:
            throw new Error();
    }
}