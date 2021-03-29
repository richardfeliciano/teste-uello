<template>
  <div class="UelloDeliverySteps">
    <div class="step" v-for="(step, idx) in steps" :key="idx">
      <font-awesome-icon
        :icon="step.icon"
        :style="{ color: iconColor }"
        size="lg"
      />
      <div :class="getClass(idx)">
        <UelloStepCircle :width="10" />
      </div>
      <div class="title">{{ step.text }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UelloDeliverySteps',

  data: () => ({
    screenWidth: window.innerWidth,
    iconColor: '#ea394f',
  }),

  computed: {
    ...mapGetters('delivery', {
      steps: 'GET_DELIVERY_STEPS',
    }),
  },

  watch: {
    screenWidth(val) {
      if (val <= 768) {
        this.iconColor = '#ffffff'
      }
      if (val > 768) {
        this.iconColor = '#ea394f'
      }
    },
  },

  methods: {
    getClass(idx) {
      if (idx === 0) {
        return 'point pointFirst'
      }

      if (idx === this.steps.length - 1) {
        return 'point pointLast'
      }

      return 'point'
    },

    onResize() {
      this.screenWidth = window.innerWidth
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
}
</script>

<style lang="css" scoped>
.UelloDeliverySteps {
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  margin-bottom: 30px;
  padding: 20px;
}
.step {
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 0.7em;
  flex-direction: column;
  color: #4b4b4d;
}
.point {
  display: flex;
  align-items: center;
  background-image: url(/img/middle-h.png);
  background-position-y: -18px;
  height: 40px;
  width: 100%;
  text-align: center;
}
.pointFirst {
  background-image: url('/img/left.png');
}
.pointLast {
  background-image: url('/img/right.png');
}
@media (max-width: 768px) {
  .step {
    color: #fff;
  }
  .title {
    padding: 5px;
  }
}
</style>
