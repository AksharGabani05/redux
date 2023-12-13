import { legacy_createStore } from "redux";
import { Reducer } from "./reducer";

export let state = legacy_createStore(Reducer);