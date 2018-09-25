<template>
  <div class="main">
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
  position: absolute;
  width: 100%;
  height: 100%;
}

.catalog-list {
  position: relative;
  top: 30%;
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