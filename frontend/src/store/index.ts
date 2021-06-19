import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import { store as auth } from './modules/auth';
export type RootState = {
  data:null
}
export default createStore({
  modules: {
    auth
  },
  plugins:[createPersistedState({storage: window.sessionStorage})]
})
