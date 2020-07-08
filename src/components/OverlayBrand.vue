<template>
  <div class="bg-brand-gradient flex items-center justify-center h-full">
    <div>
      <p v-if="title" class="text-white tg-h1-desktop md:display-3 mb-4">{{ title }}</p>
      <p v-if="message" class="text-white body-1">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverlayBrand',
  data: () => ({
    progress: 0
  }),
  props: {
    title: {
      default: ''
    },
    message: {
      default: ''
    },
    isVisible: {
      default: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.progress = 1;
    }, 300);
  }
};
</script>

<style scoped>
.progress-wrapper {
  width: 164px;
  height: 164px;
}
@screen md {
  .progress-wrapper {
    width: 328px;
    height: 328px;
  }
}
</style>
