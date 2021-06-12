<template>
    <div class="map">
        <MglMap :accessToken="accessToken" :mapStyle="mapstyle" @load="onMapLoaded"/>
    </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Mapbox from 'mapbox-gl';
import {MglMap} from 'vue-mapbox';

@Options({
    components:{
        MglMap,
    }
})
export default class Mapping extends Vue{
    mapbox! : any 
    data(){
        return {
            accessToken: 'pk.eyJ1IjoiZDFyM2N0MHIiLCJhIjoiY2twdHZnZzhpMHR2aDJvdDhiZmJuemxnaSJ9.12nIcmk0giCqU8XgK13W4Q',
            mapstyle: 'mapbox://styles/mapbox/streets-v11'
        }
    }
    created(){
        this.mapbox = null;
    }
    onMapLoaded(event: any):any{
        console.log(event)
        this.mapbox = event.map
    }
}
</script>