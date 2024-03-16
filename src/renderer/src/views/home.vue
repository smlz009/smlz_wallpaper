<template>
  <main>
    <img
      ref="img"
      class="aspect-video object-fill nodrag"
      :src="config.url"
      draggable="false"
      @click="load"
    />
    <div
      class="bg-white nodrag cursor-pointer text-center py-3 m-3 rounded-lg hover:bg-gray-200 duration-500 opacity-80 shadow-lg"
      @click="setWallpaper()"
    >
      设为壁纸
    </div>
    <div
      class="mx-3 text-xs nodrag text-gray-700 text-right cursor-pointer hover:text-gray-900"
      @click="downloadImg"
    >
      下载壁纸
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElLoading } from 'element-plus'
import instance from '../service/axios'
import { useConfigStore } from '@renderer/store/useConfigStore'
import useWallpaper from '@renderer/hooks/useWallpaper'

const { config } = useConfigStore()
const { setWallpaper, downloadImg } = useWallpaper()

const img = ref<HTMLImageElement>()
const load = async () => {
  const loading = ElLoading.service({
    background: 'rgba(255,255,255,.5)'
  })
  const { data } = await instance.get('/file/wallpaper')
  config.url = data
  img.value!.src = data
  img.value!.onload = () => {
    loading.close()
  }
}
onMounted(() => {
  if (!config.url) load()
})
</script>

<style scoped></style>
