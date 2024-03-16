<template>
  <main class="p-3 h-[89.2vh] bg-[#34495e]">
    <section>
      <h2 class="flex justify-center py-5 opacity-80 text-white text-sm font-bold mt-5">
        参数设置
      </h2>
      <div class="flex gap-1 items-center">
        <el-input
          v-model="config.saveDirectory"
          placeholder="请选择壁纸保存目录"
          disabled
        ></el-input>
        <el-button type="primary" size="norma" @click="saveDirectory">选择图片保存目录</el-button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import useWallpaper from '@renderer/hooks/useWallpaper'

const { config } = useConfigStore()
const { saveDirectory } = useWallpaper()
</script>

<style scoped></style>
