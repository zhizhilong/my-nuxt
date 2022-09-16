<template>
  <div>
    <ul>
      <!-- 不推荐用a跳转 -->
      <!-- <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/news">News</a></li> -->
      <li><nuxt-link :to="{ name: 'index' }">HOME</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'about' }">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'news',params:{newsId:3306} }">NEWS</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'ansyData' }">ansyData</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>
