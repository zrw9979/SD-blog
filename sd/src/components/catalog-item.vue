<template>
  <div class="catalog-contaier">
    <img src="../assets/catalog-grey.png" alt="标签">
    <span class="catalog">{{catalog}}</span>
  </div>
</template>

<script>
export default {
  name: 'catalogItem',
  props: {
    catalog: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.catalog-contaier {
  padding: .5rem;
  cursor: pointer;
  display: inline-block;
}

.catalog-contaier:hover {
  border-bottom: solid #bfbfbf 1px;
}

.catalog-contaier img {
  width: 1rem;
  height: 1rem;
}

.catalog {
  padding: .5rem;
  margin-right: 1rem;
}
</style>
