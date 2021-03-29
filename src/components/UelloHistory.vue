<template>
  <div class="history">
    <div class="text-center historyTitle">
      <font-awesome-icon icon="history" :style="{ color: '#ea394f' }" />
      Histórico
    </div>

    <div class="historyItem" v-for="(item, k) in history" :key="k">
      <div :class="getClass(k)">
        <UelloStepCircle />
      </div>
      <div class="text">{{ item.title }} <br />{{ item.time }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UelloHistory',

  computed: {
    ...mapGetters('delivery', {
      history: 'GET_HISTORY',
    }),
  },

  methods: {
    getClass(k) {
      if (k === 0) {
        return { dot: true, dotFirst: true }
      }
      if (this.history.length === k + 1) {
        return { dot: true, dotLast: true }
      }

      return { dot: true }
    },
  },
}
</script>

<style lang="css" scoped>
.history {
  overflow-y: auto;
  max-height: 320px;
}
.historyItem {
  display: flex;
  font-size: 0.9em;
}
.historyTitle {
  color: #ea394f;
  margin-top: 20px;
  margin-bottom: 20px;
}
.dot {
  display: flex;
  align-items: center;
  background-image: url('/img/middle.png');
  background-position-x: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.dotFirst {
  background-image: url('/img/top.png');
}
.dotLast {
  background-image: url('/img/bottom.png');
}

.text {
  color: #ea394f;
  padding-left: 20px;
  display: flex;
  align-items: center;
}
</style>
