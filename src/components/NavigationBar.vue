<template>
  <nav class="nav">
    <router-link to="/"> Home </router-link>

    <span class="nav__separator"> | </span>

    <router-link to="/about"> About </router-link>

    <span class="nav__separator"> | </span>

    <router-link to="/contact"> Contact </router-link>

    <span class="nav__separator"> | </span>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style scoped lang="scss"></style>
