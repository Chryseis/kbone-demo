<template>
  <div class="searchbar-wrapper">
    <input type="text" v-model="searchText" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchText: ''
    };
  }
};
</script>

<style>
.searchbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 30px;
  background-color: #000;

  input {
    height: 20px;
    font-size: 12px;
  }
}
</style>
