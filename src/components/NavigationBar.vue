<template>
  <div class="nav-wrapper">
    <nav class="nav-wrapper__nav">
      <router-link to="/"> Home </router-link>

      <router-link to="/about"> About </router-link>

      <router-link to="/contact"> Contact </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style scoped lang="scss">
.nav-wrapper {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  &__nav {
    a {
      font-size: 1.75rem;
      margin-right: 3rem;
      text-decoration: none;
      transition: all 0.3s ease-in;

      &:hover {
        color: #319DA0 !important;
      }
    }

    a.router-link-exact-active {
      color: #42855b;
    }
  }
}
</style>
