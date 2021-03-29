<template>
  <svg
    :width="width"
    :height="width"
    viewBox="0 0 78 78"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    xmlns:serif="http://www.serif.com/"
    style="
      fill-rule: evenodd;
      clip-rule: evenodd;
      stroke-linejoin: round;
      stroke-miterlimit: 2;
      margin: 0 auto;
    "
  >
    <g transform="matrix(1,0,0,1,-28.0372,-25.7748)">
      <circle
        cx="66.887"
        cy="64.624"
        r="38.85"
        style="fill: rgb(234, 57, 79)"
      />
      <g transform="matrix(0.782065,0,0,0.782065,14.577,14.0839)">
        <circle cx="66.887" cy="64.624" r="38.85" style="fill: white" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'UelloStepCircle',

  props: {
    width: {
      type: Number,
      default: 20,
    },
  },
}
</script>

<style lang="scss" scoped></style>
