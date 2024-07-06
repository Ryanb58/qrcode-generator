<template>
  <main>
    <QRCodeGenerator />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import QRCodeGenerator from "../components/QRCodeGenerator.vue";

export default defineComponent({
  name: "App",
  components: {
    QRCodeGenerator,
  },
});
</script>

<style scoped>
main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
