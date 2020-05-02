<template>
  <div class="box">
    <p>This is a question</p>
    <label class="radio">
      <input type="radio" name="question" />
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question" />
      No
    </label>
    <label class="radio">
      <input type="radio" name="question" />
      No
    </label>
    <label class="radio">
      <input type="radio" name="question" />
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question" />
      Yes
    </label>
  </div>
</template>

<script>
export default {
  name: "Question"
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