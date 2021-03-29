<template>
  <div>
    <div class="estimatedTime">
      <div>
        <font-awesome-icon icon="clock" :style="{ color: iconColor }" />
      </div>
      <div class="time">horário estimado: {{ estimated }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UelloEstimetedTime',

  data: () => ({
    screenWidth: window.innerWidth,
    iconColor: '#ea394f',
  }),

  computed: {
    ...mapGetters('delivery', {
      estimated: 'GET_ESTIMATED_TIME',
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
.estimatedTime {
  display: flex;
  margin-top: 20px;
}
.time {
  padding-left: 16px;
  font-size: 0.9em;
}
@media (max-width: 768px) {
  .estimatedTime {
    margin-top: -20px;
    margin-left: 34px;
  }
  .time {
    padding-left: 5px;
    font-size: 0.9em;
  }
}
</style>
