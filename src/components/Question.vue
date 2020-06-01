<template>
  <div class="box">
    <p>{{ question.question }}</p>
    <label class="radio" v-for="option in question.options" :key="option">
      <input type="radio" :name="question.id" :value="option" v-model="question.selectedOption" />
      {{ option }}
    </label>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ['question']
};
</script>

<style scoped>
.radio + .radio {
  margin-left: 0;
}

.radio {
  display: block;
}
</style>