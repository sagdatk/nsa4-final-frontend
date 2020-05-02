<template>
  <div class="container">
    <h1 class="title">Математика</h1>
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
  </div>
</template>

<script>
import Question from "./Question";

export default {
  name: "Section",
  components: {
    Question
  }
};
</script>

<style>
</style>