<template>
  <div class="panel">
    <!--MOBILE-->
    <div class="d-sm-block d-md-none w-100">
      <UelloDeliveryStatus />
      <UelloDeliveryAddress />
    </div>
    <!--DESKTOP-->
    <div class="d-none d-md-block">
      <UelloDeliverySteps />
      <UelloDeliveryStatus />
      <UelloDeliveryAddress />
      <UelloDeliveryResume />
      <UelloHistory />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UelloPanel',
}
</script>

<style lang="css" scoped>
.panel {
  position: absolute;
  background: #ffffffc2;
  width: 400px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 2px 4px 16px #00000014;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  height: 96%;
  backdrop-filter: blur(6px);
}

@media (max-width: 768px) {
  .content {
    display: block;
    height: 100vh;
  }
  .logoBar {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .panel {
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 92%;
    height: auto;
    margin-bottom: -10px;
  }
}
</style>
