<script setup lang="ts">
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomColor = ref('rgb(0,0,0)')

let timeout: NodeJS.Timeout

onMounted(() => {
  timeout = setInterval(() => {
    randomColor.value = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timeout)
})

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex justify-center mt-32">
    <div>
      <div class="grid grid-cols-4 items-center gap-10 my-10">
        <div class="icon-[logos--vue] size-20" />
        <div class="icon-[logos--vitejs] size-20" />
        <div class="icon-[logos--vitest] size-20" />
        <div class="icon-[logos--tailwindcss-icon] size-20" />
        <div class="icon-[logos--eslint] size-20" />
        <div class="icon-[logos--vueuse] size-20" />
        <div class="icon-[logos--typescript-icon] size-20" />
      </div>
      <div class="text-5xl font-thin transition-colors duration-1000 ease-linear" :style="`color:${randomColor}`">
        Rika-Vue-Template
      </div>
      <div class="my-4 flex justify-center gap-5 text-gray-500">
        <a
          target="_blank" href="https://rika-me.netlify.app/#/"
          class="icon-[mdi--user] text-5xl hover:text-gray-700"
        />
        <a
          target="_blank" href="https://github.com/rika-template/vue-template"
          class="icon-[mdi--github] text-5xl hover:text-gray-700"
        />
        <a
          target="_blank" href="https://gitee.com/rika-template/vue-template"
          class="icon-[simple-icons--gitee] text-5xl hover:text-gray-700"
        />
        <a
          :class="isDark ? 'icon-[carbon--moon]' : 'icon-[carbon--sun]'"
          class=" text-5xl hover:text-gray-700"
          @click="toggleDark()"
        />
      </div>
      <div />
    </div>
  </div>
</template>
