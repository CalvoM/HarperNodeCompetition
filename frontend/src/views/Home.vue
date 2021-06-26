<template>
  <div v-if="dataDownloaded" id="dashboard" class="w-full">
    <div v-if="registeredDevices.length == 0">
      You have no devices registered
    </div>
  </div>
  <div v-else>
    <loader variant="info" msg="Getting your devices"></loader>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Loader from "@/components/Loader.vue"
@Options({
  components: {
    HelloWorld,
    Loader
  },
})
export default class Home extends Vue {
  registeredDevices = [];
  dataDownloaded = false;
  created(): void {
    console.log("Created");
  }
  mounted(): void {
    console.log("Mounted");
    setTimeout(() => {
      this.dataDownloaded = true;
    }, 5000);
  }
}
</script>
