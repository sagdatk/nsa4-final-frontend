<template>
  <div class="container">
    <h1 class="title">Available exams</h1>
    <div id="tests">
        <Test v-for="test in tests" :key="test._id" :test="test"/>
    </div>
  </div>
</template>

<script>
import Test from './Test';
import axios from 'axios';

export default {
  name: "Section",
  components: {
      Test
  },
  data: function () {
    return {
      tests: []
    }
  },
  created() {
    axios.get('http://localhost:3000/api/tests/')
    .then(response => {
      this.tests = response.data;
    })
  }
};
</script>

<style scoped>
#tests {
    display: flex;
    align-items: stretch;
}
</style>