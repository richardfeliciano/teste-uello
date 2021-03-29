<template>
  <div class="deliveryResume">
    <div class="radial">
      <radial-progress-bar
        :diameter="diameter"
        :completed-steps="completedSteps"
        :total-steps="totalSteps"
        innerStrokeColor="#cccccc"
        :startColor="progressColor"
        :stopColor="progressColor"
        :innerStrokeWidth="5"
        :strokeWidth="5"
      >
        <div>Falta</div>
        <div>{{ delivery.number - delivery.actual }}</div>
        <div>Entrega</div>
      </radial-progress-bar>
    </div>
    <div class="details">
      <div class="d-sm-block d-md-none w-100">
        <UelloDeliverySteps />
        <UelloEstimetedTime />
      </div>
      <div class="d-none d-md-block text">
        Sua entrega é a nº:<span style="color: #ea394f">
          {{ delivery.number }}</span
        ><br />
        Entrega Atual: {{ delivery.actual }} <br />
        Quantidade de volumes: {{ delivery.packages }}<br />
        Motorista: {{ delivery.driver.name }}
      </div>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
import { mapGetters } from 'vuex'

export default {
  name: 'UelloDeliveryResume',

  components: {
    RadialProgressBar,
  },

  data: () => ({
    completedSteps: 7,
    screenWidth: window.innerWidth,
    totalSteps: 10,
    diameter: 120,
    progressColor: '#0B4F6C',
  }),

  computed: {
    ...mapGetters('delivery', {
      delivery: 'GET_DELIVERY',
    }),
  },

  watch: {
    screenWidth(val) {
      if (val <= 768) {
        this.progressColor = '#02BAEF'
        this.diameter = 100
      }
      if (val > 768) {
        this.progressColor = '#0B4F6C'
        this.diameter = 120
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
    },
  },
}
</script>

<style lang="css" scoped>
.deliveryResume {
  display: flex;
  font-size: 0.9em;
  margin-top: 30px;
  border-top: 1px dashed #4b4b4d;
  border-bottom: 1px dashed #4b4b4d;
  padding-top: 20px;
  padding-bottom: 20px;
}
.text {
  padding-left: 10px;
}

.radial {
  display: flex;
  justify-content: center;
  align-items: center;
}

.details {
  display: flex;
  padding-left: 10px;
  font-size: 0.9em;
  align-items: center;
}
@media (max-width: 768px) {
  .deliveryResume {
    position: absolute;
    top: 20;
    background: #0b4f6c;
    margin: 10px;
    border-radius: 5px;
    padding: 0px 10px;
    color: #fff;
    width: 97%;
    z-index: 1000;
  }
}
</style>
