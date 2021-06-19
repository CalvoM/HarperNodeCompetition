import { RootState } from "@/store";
import { Module } from "vuex";
import { State, state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

export const store: Module<State, RootState> ={
    state,
    mutations,
    actions,
    getters
}