<template>
  <div id="map" class="w-full absolute top-0 bottom-0">
    <!-- <MglMap :accessToken="accessToken" :mapStyle="mapStyle"></MglMap> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Mapbox from "mapbox-gl"
import {MglMap} from "vue-mapbox"
@Options({
  components: {
    HelloWorld,
    MglMap
  },
})
export default class Home extends Vue {
  accessToken  = process.env.VUE_APP_MAP_ACCESS_TOKEN
  mapStyle = "mapbox://styles/mapbox/streets-v11"
  mapbox: typeof Mapbox
  created(): void{
    this.mapbox = Mapbox
  }
  mounted():void{
    Mapbox.accessToken = this.accessToken
new Mapbox.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [36.815500, -1.284100],
      zoom: 12,
      maxBounds: [
        [36.819500, -1.294100],
        [36.814500, -1.264100],
      ],
    });

  }
}
</script>
