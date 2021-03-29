<template>
  <div class="content">
    <b-overlay :show="isLoading" no-wrap> </b-overlay>
    <UelloHelpCenter v-if="!isLoading" />
    <UelloLogoBar v-if="!isLoading" />
    <UelloDeliveryResume v-if="!isLoading" class="d-sm-block d-md-none w-100" />
    <div class="mapContent">
      <UelloMapBox v-if="!isLoading" />
      <UelloPanel v-if="!isLoading" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  computed: {
    ...mapGetters('delivery', {
      isLoading: 'GET_LOADER',
    }),
  },

  methods: {
    ...mapActions('delivery', {
      fetchDelivery: 'fetchDelivery',
    }),
  },

  mounted() {
    this.fetchDelivery()
  },
}
</script>

<style lang="css" scoped>
.content {
  display: flex;
  height: 100vh;
}

.mapContent {
  background: #f5f5f5;
  height: 100%;
  flex: 1;
  margin: 0;
}

@media (max-width: 768px) {
  .content {
    display: block;
    height: 100vh;
  }
}
</style>
