<template>
  <div class="container">
    <Breadcrumb :items="['loading', 'loading_1']" />

    <a-card class="text">
      loading
    </a-card>

    <a-card class="general-card">

    </a-card>

  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;

  .text {
    width: 100%;
    margin-bottom: 10px;
    border: none;
  }

  .general-card {
    width: 100%;
  }
}
</style>