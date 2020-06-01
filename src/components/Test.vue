<template>
  <div class="card" @click="opentest()">
    <div class="card-image">
      <figure class="image">
        <img :src="imageUrl" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{ test.topic }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ["test"],
  computed: {
    imageUrl: function() {
      return require("../assets/" + this.test._id + ".jpg");
    }
  },
  methods: {
    opentest: function () {
        this.$router.push({ name: 'test', params: { id: this.test._id } })
    }
  }
};
</script>

<style scoped>
img {
    width: 300px;
    height: 200px;
}
</style>