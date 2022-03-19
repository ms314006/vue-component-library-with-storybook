<template>
  <div id="app">
    <Header>Header</Header>
    <Passage>text...</Passage>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Passage from "./components/Passage.vue";

export default {
  name: "App",
  components: {
    Header,
    Passage,
  },
};
</script>
