<template>
  <div id="app">
    <div class="container">
      <Navigation />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 30px;
}
</style>