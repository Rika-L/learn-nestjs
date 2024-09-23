<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/25
 */

const imgUrl = ref(`/api/user/captcha?t=${new Date().getTime()}`)

function refreshImgUrl() {
  imgUrl.value = `/api/user/captcha?t=${new Date().getTime()}`
}

const captcha = ref('')

function submit() {
  fetch(`/api/user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: captcha.value,
    }),
  }).then(res => res.json()).then((data) => {
    console.log(data)
  })
}
</script>

<template>
  <img :src="imgUrl" alt="" @click="refreshImgUrl">
  <input v-model="captcha" type="text">
  <button @click="submit">
    提交
  </button>
</template>
