<template>
  <div class="UelloHelpCenter">
    <div class="dropDown">
      <div>
        <font-awesome-icon
          icon="question-circle"
          :style="{ color: '#ffffff' }"
          size="lg"
        />
        <span class="textHelp"> Central de Ajuda</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UelloHelpCenter',
}
</script>

<style lang="css" scoped>
.UelloHelpCenter {
  background-color: #4b4b4d;
  color: #fff;
  text-align: center;
  border-radius: 50px;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  z-index: 1000;
}
.dropDown {
  flex: 4;
}
.UelloHelpCenter:last-child {
  flex: 1;
}
@media (max-width: 768px) {
  .textHelp {
    display: none;
  }
  .UelloHelpCenter {
    border-radius: 100px;
    padding: 15px;
    margin-bottom: 180px;
  }
}
</style>
