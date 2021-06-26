<template>
  <span class="inline-flex rounded-md shadow-sm">
    <button :class="variant" disabled>
      <svg
        class="animate-spin h-5 w-5 mr-3 text-white -ml-1"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {{msg}}
    </button>
  </span>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  props: {
    msg: String,
    variant: {
      type: String,
      default:"error"
    }
  }
})
export default class Loader extends Vue {
  variant!:string;
  msg!: string;
}
</script>
<style lang="postcss" scoped>
.info {
  @apply inline-flex items-center px-4 mt-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:bg-green-800 transition ease-in-out duration-150;
}
.error {
  @apply inline-flex items-center px-4 mt-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-700 hover:bg-red-500 sm:focus:outline-none focus:bg-red-800 transition ease-in-out duration-150;
}
</style>
