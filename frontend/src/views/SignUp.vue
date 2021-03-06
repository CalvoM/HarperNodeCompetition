<template>
  <div class="w-full bg-white rounded shadow-xl p-8 m-4 md:max-w-sm md:mx-auto">
    <h1 class="block w-full text-center text-xl text-green-900 font-bold mb-6">
      Sign Up Page
    </h1>
        <notification :msg="httpError.Message" :variant="httpError.Variant" v-if="httpError.ShowErr" />
    <form @submit.prevent="submitForm" class="form">
      <div class="field-group mb-4 md:w-full">
        <label for="username" class="field-label">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          class="field"
          placeholder="Enter username"
          v-model="user.UserName"
          required
        />
      </div>
      <div class="field-group mb-4 md:w-full">
        <label for="email" class="field-label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="field"
          placeholder="Enter user email"
          v-model="user.UserEmail"
          required
        />
      </div>
      <div class="field-group mb-4 md:w-full">
        <label for="userpassword" class="field-label">Password</label>
        <input
          type="password"
          name="userpassword"
          id="userpassword"
          placeholder="Enter password"
          class="field"
          v-model="user.Password"
          required
        />
      </div>
      <div class="field-group mb-6 md:w-full">
        <label for="confirmpassword" class="field-label"
          >Confirm password</label
        >
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          placeholder="Confirm password"
          class="field"
          v-model="confirm_password"
          @input="checkPassword"
          required
        />
      </div>
      <div
        class="bg-red-900 md:w-full text-white mb-6 mt-6 py-2 px-2 rounded-xl"
        v-if="showErrorMsg"
      >
        Password Do not match
      </div>
      <button type="submit" class="submit-btn" :disabled="!enableSubmitBtn">
        Sign up
      </button>
    </form>
    <div class="text-sm text-green-500 py-3">
      Already have an account?
    </div>
    <a id="info" class="font-bold text-green-700" href="/signin/" target="_blank">
      Sign in.
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {BaseUser, HTTPError} from "@/types"
import Notification from "@/components/Notification.vue"
import store from "@/store";
import { ActionTypes } from "@/store/modules/auth/actions";

interface User extends BaseUser{
  UserName: string;
}
@Options({
  components:{
    Notification
  }
})
export default class SignUp extends Vue {
  user: User = { UserName: "", UserEmail: "", Password: "" };
  httpError: HTTPError = {ShowErr:false,Message:"",Variant:""}
  confirm_password = "";
  showErrorMsg = false;
  enableSubmitBtn = false;
  async submitForm(): Promise<void> {
    try {
      store.dispatch(ActionTypes.REGISTER,this.user)
      this.user = { UserEmail: "", UserName: "", Password: "" };
      this.confirm_password = ""
      this.httpError = {Message:"Sign up Successful",ShowErr:true,Variant:"success"}
    } catch (error) {
      this.httpError = {Message:"Something went wrong",ShowErr:true, Variant:"error"}
    }
  }
  checkPassword(): void{
    if (this.confirm_password.length ===0){
      this.showErrorMsg = false;
      this.enableSubmitBtn = true;
      return
    }
    if (this.user.Password === this.confirm_password) {
      this.showErrorMsg = false;
      this.enableSubmitBtn = true;
    } else if(this.user.Password !== this.confirm_password) {
      this.showErrorMsg = true;
      this.enableSubmitBtn = false;
    }
  }
}
</script>

<style scoped lang="postcss">
.field {
  @apply border py-2 px-3 text-gray-900 text-center;
}
.field-label {
  @apply text-lg text-gray-500 mb-2 font-semibold;
}
.field-group {
  @apply flex flex-col;
}
.form {
  @apply mb-4 md:flex md:flex-wrap md:justify-between;
}
.submit-btn {
  @apply block text-white text-lg p-4 rounded w-full bg-green-800;
}
button:disabled {
  @apply block text-green-800 text-lg p-4 rounded w-full bg-gray-300;
}
</style>