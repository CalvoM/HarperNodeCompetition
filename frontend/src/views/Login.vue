
<template>
  <div class="w-full bg-white rounded shadow-xl p-8 m-4 md:max-w-sm md:mx-auto">
    <h1 class="block w-full text-center text-xl text-green-900 font-bold mb-6">
      Log in page
    </h1>
        <notification :msg="httpError.Message" :variant="httpError.Variant" v-if="httpError.ShowErr" />
    <form @submit.prevent="submitForm" class="form">
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
      <button type="submit" class="submit-btn">
        Log in
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {BaseUser as User, HTTPError} from "@/types";
import Notification from "@/components/Notification.vue"
import store from "@/store"
import {ActionTypes} from "@/store/modules/auth/actions"
@Options({
  components:{
    Notification
  }
})
export default class SignUp extends Vue {
  user: User = { UserEmail: "", Password: "" };
  httpError: HTTPError = {ShowErr:false,Message:"",Variant:""}
  showErrorMsg = false;
  enableSubmitBtn = false
  async submitForm(): Promise<void> {
    try {
      store.dispatch(ActionTypes.LOGIN, this.user)
      this.user = { UserEmail: "", Password: "" };
      this.httpError = {Message:"Log in Successful",ShowErr:true,Variant:"success"}
    } catch (error) {
      this.httpError = {Message:"Something went wrong",ShowErr:true, Variant:"error"}
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