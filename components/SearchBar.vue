<template>
  <section>
      <input class="searchInput" v-model="searchTerm" placeholder="Search Twitter">
      <p>Searching For: {{ searchTerm }}</p> 
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      searchTerm: ''
    }
  }
}
</script>

<style>
.searchInput {
  background-color: rgb(230, 236, 240);
  border-radius: 15px;
  padding: 10px;
  width: 466px;
  line-height: normal;
  font-weight: 400;
}
</style>
