<template>
  <div class="mapBox">
    <MapboxMap :access-token="accessToken">
      <MapboxMarkers :items="addresses" primary>
        <template slot-scope="address">
          {{ address.title }}
        </template>
      </MapboxMarkers>
    </MapboxMap>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    accessToken: process.env.VUE_APP_MAPBOX_KEY,
  }),

  computed: {
    ...mapGetters('delivery', {
      addresses: 'GET_ADDRESSES',
    }),
  },
}
</script>

<style lang="css" scoped>
.mapBox {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
