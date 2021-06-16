import axios from "axios"
import { Module } from "vuex"

interface LoginUser {
    Name: string;
    Email: string;
}
interface RegisterUser {
    UserName: string;
    UserEmail: string;
    Password: string;
}
const authState = {
    User: null
}

const authGetters = {

}

const authActions = {
    async RegisterUser(user: RegisterUser) {
        await axios.post(process.env.VUE_APP_SERVER_URL + "/user/signup/", user)
    },

}
const mutations = {

}

const auth: Module<any, any> = {
    state: authState,
    getters: authGetters,
    actions:authActions,
    mutations
}
export default auth