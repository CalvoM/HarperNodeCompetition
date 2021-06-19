<template>
  <div id="map" class="w-full">
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
  accessToken  = "pk.eyJ1IjoiZDFyM2N0MHIiLCJhIjoiY2twdHZnZzhpMHR2aDJvdDhiZmJuemxnaSJ9.12nIcmk0giCqU8XgK13W4Q"
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
      center: [103.811279, 1.345399],
      zoom: 12,
      maxBounds: [
        [103.6, 1.1704753],
        [104.1, 1.4754753],
      ],
    });

  }
}
</script>
