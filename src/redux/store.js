import { createStore } from "redux";
import Cakereducer from "./cakes/cakeReducer";
const store = createStore(Cakereducer);
export default store;
