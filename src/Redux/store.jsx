import { legacy_createStore as cerateStore } from "redux";
import {reducer} from "./reducer";
import { applyMiddleware } from "redux";

const productMiddleware=(store)=>(next)=>(action)=>{
if(typeof(action)==='function'){
    return action(store.dispatch);
}
    next(action)

}

export const store=cerateStore(reducer,applyMiddleware(productMiddleware))