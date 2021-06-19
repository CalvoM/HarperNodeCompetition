import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationTypes } from "./mutations";
import {State} from "./state"
import {RootState} from "@/store"
import { BaseUser } from "@/types";
import axios from "axios"

export enum ActionTypes{
    REGISTER = "REGISTER",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
}

interface AugmentedActionContext extends Omit<ActionContext<State, RootState>, "commit"> {
    commit<K extends keyof Mutations>(
        key: K,
        payload?: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

interface User extends BaseUser{
UserName: string;
}
export interface Actions{
    [ActionTypes.REGISTER]({commit}: AugmentedActionContext, user: User): Promise<void>,
    [ActionTypes.LOGIN]({commit}: AugmentedActionContext, user: BaseUser): Promise<void>,
    [ActionTypes.LOGOUT]({commit}: AugmentedActionContext): Promise<void>
}

export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.REGISTER]({commit}: AugmentedActionContext, user: User): Promise<void>{
      await axios.post(
        process.env.VUE_APP_SERVER_URL + "/user/signup/",
        user
      );
    },
    async [ActionTypes.LOGIN]({commit}: AugmentedActionContext, user: BaseUser): Promise<void>{
      console.table(user)
      const resp = await axios.post(
        process.env.VUE_APP_SERVER_URL + "/user/signin/",
        user
      );
     commit(MutationTypes.SET_USER,{UserEmail:user.UserEmail,UserName:resp.data.username})
    },
    async [ActionTypes.LOGOUT]({commit}: AugmentedActionContext): Promise<void>{
      await axios.post(
        process.env.VUE_APP_SERVER_URL + "/user/signout/"
      );
     commit(MutationTypes.SET_USER,null)
    }

}