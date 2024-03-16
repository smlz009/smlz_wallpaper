<template>
  <main class="px-3 py-2 text-sm opacity-80 flex justify-between items-center drag">
    <section>Smlz桌面壁纸</section>
    <section class="flex items-center justify-center gap-2">
      <pic
        theme="outline"
        size="24"
        class="nodrag cursor-pointer"
        :class="$route.name === 'home' ? 'text-orange-600' : 'text-gray-600'"
        @click="$router.push({ name: 'home' })"
      />
      <config
        theme="outline"
        size="24"
        class="nodrag cursor-pointer"
        :class="$route.name === 'setting' ? 'text-orange-600' : 'text-gray-600'"
        @click="$router.push({ name: 'setting' })"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { Pic, Config } from '@icon-park/vue-next'
</script>

<style scoped lang="scss"></style>
