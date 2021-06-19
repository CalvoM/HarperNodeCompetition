import { MutationTree } from "vuex";
import { State, UserDetails, AuthConfig } from "@/store/modules/auth/state";

export enum MutationTypes{
    SET_USER = "SET_USER",
    SET_AUTH_DETAILS = "SET_AUTH_DETAILS"
}

export type Mutations<S = State> = {
    [MutationTypes.SET_USER](state: State, user: UserDetails | null): void
    [MutationTypes.SET_AUTH_DETAILS](state: State, authConfig: AuthConfig | null): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_USER](state: State, user: UserDetails | null){
        state.user = user
    },
    [MutationTypes.SET_AUTH_DETAILS](state: State, authConfig: AuthConfig | null){
        state.authConfig = authConfig
    }

}