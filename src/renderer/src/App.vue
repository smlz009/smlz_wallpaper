<template>
  <Suspense>
    <main class="drag">
      <Navbar />
      <RouterView />
    </main>
  </Suspense>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style scoped></style>
