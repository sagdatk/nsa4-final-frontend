<template>
  <div class="container">
    <div class="notification">
      <h2 class="subtitle">Ваш прогресс</h2>

      <b-progress type="is-success" :value="25"></b-progress>
    </div>
    <aside class="menu">
      <p class="menu-label">День 1</p>
      <ul class="menu-list">
        <li>
          <a class="is-active">Математика</a>
        </li>
        <li>
          <a>Количественные характеристики</a>
        </li>
      </ul>
      <p class="menu-label">День 2</p>
      <ul class="menu-list">
        <li>
          <a>Русский язык</a>
        </li>
        <li>
          <a>Английский язык</a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
</style>