<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';

export default {
  name: 'App',

  components: {
    NavigationBar,
  },

  mounted() {
    this.setRouteParams();
  },

  methods: {
    setRouteParams() {
      setTimeout(() => {
        this.$router.push({
          name: 'contact',
          params: {
            name: 'Bruno Silveira',
            city: 'Fortaleza',
          },
        });
      }, 5000);
    },
  },
};
</script>

<style scoped lang="scss"></style>
