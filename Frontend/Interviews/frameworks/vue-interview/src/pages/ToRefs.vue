<template>
  <h3>
    ToRefs
  </h3>
</template>

<script lang="ts">
import useRefs from "../utils/useRefs";
import {onMounted} from "vue";

export default {
  name: "ToRefs",
  setup() {
    const {x, y} = useRefs()
    onMounted(() => {
      console.log(x.value, y.value)
    })
  }
}
</script>

<style scoped>

</style>
