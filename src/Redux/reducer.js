import {MAINPRODUCT} from "./action";
import {SORTORDERASS}  from "./action";
import {SORTORDERDEC}  from "./action";
import {SETUSER} from "./action";
import { ADDCART } from "./action";
const initState={
    mainproduct:[],
    cart:[],
    user:null
}
export const reducer=(store=initState,action)=>{
switch(action.type){
    case ADDCART :return {...store,["cart"]:action.payload};
    case SETUSER:return {...store,["user"]:action.payload};
    case MAINPRODUCT : return {...store,["mainproduct"]:action.payload};
    case SORTORDERDEC: return {...store,["mainproduct"]:[...store["mainproduct"]].sort((a,b)=>a["price"]-b["price"])};
    case SORTORDERASS: return {...store,["mainproduct"]:[...store["mainproduct"]].sort((a,b)=>b["price"]-a["price"])};
    default:return store;
}

}