<template>
    <nav id="nav" class="flex justify-between">
        <a href="/">IOT Viewer</a>
        <div v-if="isUserLoggedIn">
            <button @click="logOut" id="logOutBtn">Log Out</button>
        </div>
    </nav>
</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import store from "@/store"
import { ActionTypes } from '@/store/modules/auth/actions';
export default class NavBar extends Vue{
    get isUserLoggedIn() : boolean{
        return store.getters.isAuthenticated
    }
    logOut(): void{
        try {
            store.dispatch(ActionTypes.LOGOUT)
        } catch (error) {
           console.log(error) 
           alert("Failed to log out")
        }
    }
}
</script>
<style scoped lang="postcss">
    #nav{
        @apply bg-green-700 text-white text-lg;
    }
    #logOutBtn{
        @apply bg-green-700 px-3 py-2 text-white rounded-lg border-solid border-white border-2;
    }
    a,
    a:visited{
        @apply text-white;
    }
</style>