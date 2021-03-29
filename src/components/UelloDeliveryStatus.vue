<template>
  <div class="UelloDeliveryStatus">
    <h2 class="d-none d-md-block">{{ delivery.status.title }}</h2>
    <p>
      Seu pedido da <strong>{{ customer.name }}</strong> saiu para entrega, e
      será entregue no endereço:
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UelloDeliveryStatus',

  computed: {
    ...mapGetters('delivery', {
      delivery: 'GET_DELIVERY',
      customer: 'GET_CUSTOMER',
    }),
  },
}
</script>

<style lang="css" scoped>
.UelloDeliveryStatus {
  background-color: #0b4f6c;
  color: #fff;
  padding: 20px 20px;
  margin-top: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
.UelloDeliveryStatus h2 {
  font-size: 1em;
}
.UelloDeliveryStatus p {
  font-size: 0.8em;
  margin: 0;
}
@media (max-width: 768px) {
  .UelloDeliveryStatus {
    background-color: #ea394f;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-top: -100px;
    right: 0;
    position: absolute;
    width: 100%;
    z-index: 200000;
  }
}
</style>
