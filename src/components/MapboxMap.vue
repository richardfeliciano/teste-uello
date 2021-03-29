<script>
import mapboxgl from 'mapbox-gl'
import cuid from 'cuid'

export default {
  props: {
    accessToken: {
      type: String,
      required: true,
    },
    mapStyle: {
      type: String,
      default: 'light-v9',
    },
    mapSprite: {
      type: String,
      default: 'satellite-v9',
    },
  },
  data() {
    return {
      map: null,
      mapId: cuid(),
    }
  },
  created() {
    mapboxgl.accessToken = this.accessToken
  },
  mounted() {
    this.$el.style.height =
      this.$el.parentNode.getBoundingClientRect().height + 'px'

    this.map = new mapboxgl.Map({
      container: this.mapId,
      style: `mapbox://styles/mapbox/${this.mapStyle}`,
      sprite: `mapbox://sprites/mapbox/${this.mapSprite}`,
    })
  },
}
</script>

<template>
  <div :id="mapId" :class="$style.map">
    <slot />
  </div>
</template>

<style lang="css" module>
.map {
  min-height: 600px;
}
</style>
