<template>
  <div>
    <div class="list-container">
      <listItem
        v-for="item in list"
        :blogId="item.blogId"
        :time="item.time"
        :title="item.title"
        :catalog="item.catalog"
      />
    </div>
  </div>
</template>

<script>
import listItem from '../components/list-item.vue'

export default {
  name: 'list',
  components: {
    listItem
  },
  data() {
    return {
      list: [
        {
          title: '啥啥啥啥啥',
          time: '2017.10.9',
          blogId: '20966895645642',
          catalog: ['timing', 'something'] 
        },
        {
          title: '啥啥啥啥啥',
          time: '2017.10.9',
          blogId: '20966895645642',
          catalog: ['timing'] 
        },
        {
          title: '啥啥啥啥啥',
          time: '2017.10.9',
          blogId: '20966895645642',
          catalog: ['timing'] 
        },
        {
          title: '啥啥啥啥啥',
          time: '2017.10.9',
          blogId: '20966895645642',
          catalog: ['timing'] 
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>