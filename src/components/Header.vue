<template>
  <h1 class="text">
    <slot />
  </h1>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style scoped lang="scss">
.text {
  color: #FF5C8D;
}
</style>
