<template>
  <div>
    <h2>
      Home
    </h2>
    <HomeButton @emitClick="emitClick"></HomeButton>
  </div>
</template>

<script setup lang="ts">
import HomeButton from "../../components/HomeButton.vue"</script>

const emitClick = (val) => {
}
<style scoped>

</style>
