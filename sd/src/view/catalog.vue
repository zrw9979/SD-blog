<template>
  <div class="main">
    <div class="catalog-title">Categories</div>
    <div class="catalog-list">
      <catalogItem
        class="catalog-item"
        v-for="item in list"
        :catalog="item"
      />
    </div>
  </div>
</template>

<script>
import catalogItem from '../components/catalog-item.vue'

export default {
  name: 'Catalog',
  data() {
    return {
      list: ['timing', 'something', 'add', 'what..']
    }
  },
  components: {
    catalogItem 
  }
}
</script>

<style scope>
.main {
  width: 50%;
  margin: 0 auto;
}

.catalog-title {
  padding: 2rem;
  font-size: 1.5rem;
  border-bottom: 1px solid #bfbfbf
}

.catalog-list {
  position: relative;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.catalog-item::after {
  content: '';
  margin-right: .5rem;
}

.catalog-item:last-of-type::after {
  content: '';
  margin-right: 0;
}
</style>