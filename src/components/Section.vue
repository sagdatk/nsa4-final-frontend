<template>
  <div class="container">
    <h1 class="title">Математика</h1>
    <form @submit="submitAnswers">
      <Question v-for="question in questions" :key="question.id" :question="question" />
      <button class="button is-link">Submit</button>
    </form>
  </div>
</template>

<script>
import Question from "./Question";
import axios from "axios";

export default {
  name: "Section",
  components: {
    Question
  },
  data: function() {
    return {
      questions: []
    };
  },
  methods: {
    submitAnswers(e) {
      e.preventDefault();
      const selected = this.questions.map(q =>
        q.selectedOption ? q.selectedOption : ""
      );
      const id = this.$route.params.id;
      axios.post(`http://localhost:3000/api/tests/${id}`, {
        answers: selected
      }).then(response => {
        alert(`Score: ${parseInt(response.data.score * 100)}%`);
      });
    }
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`http://localhost:3000/api/tests/${id}`).then(response => {
      this.questions = response.data.questions;
    });
  }
};
</script>

<style scoped>
</style>