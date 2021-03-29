<template>
  <div class="logoBar">
    <UelloLogo />
    <UelloProfile />
  </div>
</template>

<script>
export default {
  name: 'UelloLogoBar',
}
</script>

<style lang="css" scoped>
.logoBar {
  background: #ea394f;
  width: 80px;
  text-align: center;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 768px) {
  .logoBar {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
