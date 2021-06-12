<template>
  <div class="home">
    <Mapping />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Mapping from '@/components/Map.vue'

@Options({
  components: {
    HelloWorld,
    Mapping
  },
})
export default class Home extends Vue {}
</script>
