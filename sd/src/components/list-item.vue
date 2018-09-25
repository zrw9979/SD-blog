<template>
  <div class="list-container">
    <div class="artical-title">啥啥啥啥啥</div>
    <div class="list-bottom-container">
      <div class="time-container">
        <img src="../assets/clock.png" alt="时间："> {{time}}
      </div>
      <div class="catalog-container">
        <img src="../assets/catalog-grey.png" alt="标签：">
        <span class="catalog" v-for="cata in catalog">{{cata}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    id: String,
    time: String,
    catalog: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-container {
  width: 50%;
  margin: 3rem auto;
  padding: 1rem 2rem;
  border: 3px solid #bfbfbf;
  border-radius: 1rem;
}

.artical-title {
  margin-bottom: 1rem;
  color: #707070;
  font-size: 2rem;
  text-align: left;
}

.list-bottom-container {
  text-align: left;
}

.list-bottom-container div {
  display: inline-flex;
  align-items: center;
}

.list-bottom-container div img {
  width: 1rem;
  height: 1rem;
  margin-right: .5rem;
}

.time-container {
  margin-right: 1rem;
}

.catalog::after {
  content: ',';
  margin-right: .5rem;
}

.catalog:last-of-type::after {
  content: '';
  margin-right: 0;
}
</style>
