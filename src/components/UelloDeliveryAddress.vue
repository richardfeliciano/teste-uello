<template>
  <div class="UelloDeliveryAddress">
    <div class="icon">
      <font-awesome-icon
        icon="map-marker-alt"
        :style="{ color: '#4B4B4D' }"
        size="lg"
      />
    </div>
    <div>
      <div class="address" v-for="(address, idx) in addresses" :key="idx">
        {{ address.street }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('delivery', {
      addresses: 'GET_ADDRESSES',
    }),
  },
}
</script>

<style lang="css" scoped>
.UelloDeliveryAddress {
  margin-top: 30px;
  display: flex;
}
.icon {
  padding-right: 10px;
}
.address {
  font-size: 0.8em;
  color: #4b4b4d;
  padding: 5px;
}

@media (max-width: 768px) {
  .UelloDeliveryAddress {
    margin-top: 80px;
  }
}
</style>
