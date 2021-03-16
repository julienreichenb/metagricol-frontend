<template>
    <div v-if="exploitationsgis.length">
        <div class="w-100 border border-dark">
            <l-map
                style="height: 65vh"
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
                <ExploitationMarkers :exploitations="exploitationsgis" :selected="selected" :bounds="currentBounds" :zoom="currentZoom" />
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
    props: {
        selected: { type: Array, default: null },
    },
    data() {
        return {
            zoom: 9,
            center: latLng(46.3507967, 7.6220283),
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