<template>
  <div>
    <h2 v-if="error.statusCode == 404">404 not found page</h2>
    <h2 v-else>500服务器内部错误</h2>
    <ul>
      <li><nuxt-llink to="/">HOME</nuxt-llink></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ["error"],
};
</script>

<style>
</style>
