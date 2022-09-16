<template>
  <div>
    <h2>news index page</h2>
    <p>newId:{{$route.params.newsId}}</p>
    <ul>
      <li><a href="/">Home</a></li>
      <li><nuxt-link :to="{name:'news-id',params:{id:123}}" >news-1</nuxt-link></li>
      <li><a href="/news/456">news-2</a></li>
      <li><a href="/news/false">news-false</a></li>
      <li>
        <nuxt-link :to="{name:'news-id',params:{id:1234,title:'每日八卦'}}" >news</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
