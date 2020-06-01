<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/logo.png" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-primary" to="/tests">Tests</router-link>
            <router-link class="button is-primary" to="/about">About</router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style>
</style>