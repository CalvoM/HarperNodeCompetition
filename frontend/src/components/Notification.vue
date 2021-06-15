<template>
    <div id="notification" :class="variant">
        {{msg}}
    </div>
</template>
<script lang="ts">
import {Vue, Options} from 'vue-class-component';
@Options({
    props:{
        msg: String,
        variant: {
            type: String,
            default:""
        }
    }
})
export default class Notification extends Vue{
    msg!: string
    variant!: string
}
</script>

<style lang="postcss" scoped>
.error{
    @apply bg-red-600 md:w-full text-white mb-6 mt-6 py-2 px-2 rounded-xl
}
.success{
    @apply bg-green-500 md:w-full text-white mb-6 mt-6 py-3 px-3 rounded-md
}
.warning{
    @apply bg-red-400 md:w-full text-white mb-6 mt-6 py-2 px-2 rounded-xl
}
</style>