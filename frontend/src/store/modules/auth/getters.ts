import { GetterTree } from "vuex";
import { state, State, UserDetails } from "./state";
import { RootState } from "@/store";

export type Getters = {
    isAuthenticated(state: State): boolean
    stateUser(state: State): UserDetails| null
}

export const getters: GetterTree<State, RootState> & Getters = {
    isAuthenticated(state: State){
        return !!state.user
    },
    stateUser(state: State){
        return state.user
    }
}