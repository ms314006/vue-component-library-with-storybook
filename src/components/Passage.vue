<template>
  <el-card>
    <p :class="$style.text">
      <slot />
    </p>
  </el-card>
</template>

<script>
export default {
  name: "Passage",
};
</script>

<style lang="scss" src="../assets/scss/element-ui.scss"></style>
<style module lang="scss">
.text {
  color: #FFC0D3;
}
</style>
