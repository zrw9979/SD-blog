<template>
  <div class="header-container">
    <div class="intro-title">XXX's Blog</div>
    <ul class="menu-list">
      <li class="menu-list-content" @click="gotoList">
        <img src="../assets/list.png" alt="目录">
        目录
      </li>
      <li class="menu-list-content" @click="gotoCatalog">
        <img src="../assets/catalog.png" alt="标签">
        标签
      </li>
      <li class="menu-list-content" @click="gotoLogOut">
        <img src="../assets/log.png" alt="登录">
        登录
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
  width: 100%;
}

.intro-title {
  width: 50%;
  margin: 4rem auto;
  padding: 3rem;
  font-size: 5rem;
  border-bottom: solid 5px #bbb;
}

.menu-list {
  margin: 0 auto;
}

.menu-list-content {
  cursor: pointer;
  display: inline-block;
  width: 3rem;
  margin-right: 8rem;
  text-align: center;
  list-style: none;
}

.menu-list-content:last-child {
  margin-right: 0;
}

.menu-list-content img {
  width: 3rem;
  height: 3rem;
}
</style>
