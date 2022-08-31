<template>
  <div class="contact">
    <span>Contact Component</span>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',

  mounted() {
    const { params } = this.$route;

    if (Object.keys(params)?.length) {
      // eslint-disable-next-line no-alert
      alert(`Params : ${JSON.stringify(params)}`);
    }
  },
};
</script>

<style scoped lang="scss"></style>
