<template>
  <div id="app">
    <div class="container">
      <Navigation />

      <div class="columns is-marginless">
        <div class="column is-one-quarter">
          <Sidebar class="menu sticky" />
        </div>
        <div class="column">
          <Section />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";

export default {
  name: "App",
  components: {
    Navigation,
    Sidebar,
    Section
  }
};
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 30px;
}
</style>