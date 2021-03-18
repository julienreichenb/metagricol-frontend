<template>
    <div v-if="exploitationsgis.length">
        <div class="w-100 border border-dark">
            <l-map
                style="height: 55vh"
                ref="map"
                v-if="showMap"
                :zoom="zoom"
                :center="center"
                :options="mapOptions"
                @update:center="centerUpdate"
                @update:zoom="zoomUpdate"
                @update:bounds="boundsUpdate"
            >
                <l-tile-layer
                    :url="url"
                    :attribution="attribution"
                />
                <ExploitationMarkers :exploitationsgis="exploitationsgis" :bounds="currentBounds" :zoom="currentZoom" />
                <l-control position="topright" class="mt-2 mr-2">
                    <b-link @click="recenterMap">
                        <font-awesome-layers class="fa-6x">
                            <font-awesome-icon icon="circle" class="text-primary" />
                            <font-awesome-icon icon="circle" color="white" transform="shrink-1" />
                            <font-awesome-icon :icon="['fad', 'crosshairs']" class="text-primary" transform="shrink-6" />
                        </font-awesome-layers>
                    </b-link>
                </l-control>
            </l-map>
        </div>
    </div>
    <div class="w-100" style="height: 65vh" v-else>
        <loading class="mt-5" :customClass="'fa-5x'" :text="'utils.loading'" />
    </div>
</template>

<script>
import { latLng } from "leaflet"
import MapMixin from '@/mixins/map'
import ExploitationMarkers from './ExploitationMarkers'
export default {
    mixins: [MapMixin],
    components: {
        ExploitationMarkers,
    },
    data() {
        return {
            zoom: 9.5,
            center: latLng(46.1707967, 7.6220283),
            bounds: {
                _northEast: latLng(46.92588289494367, 9.014282226562502),
                _southWest: latLng(45.77135470445038, 6.231994628906251)
            },
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            currentZoom: null,
            currentCenter: null,
            currentBounds: null,
            showParagraph: false,
            mapOptions: {
                zoomSnap: 0.5,
                zoomControl: false,
            },
            showMap: true,
        }
    },
    created() {
        this.init()
    },
    mounted() {
        this.getGis(33884)
        //this.getAllGis()
    },
    methods: {
        init() {
            this.currentZoom = this.zoom
            this.currentCenter = this.center
            this.currentBounds = this.bounds
        },
        recenterMap() {
            this.$refs.map.mapObject.setView(
                this.center,
                this.zoom
            )
        },
        zoomUpdate(zoom) {
            this.currentZoom = zoom
        },
        centerUpdate(center) {
            this.currentCenter = center
        },
        boundsUpdate(bounds) {
            this.currentBounds = bounds
        },
    },
}
</script>

<style lang="scss">

</style>