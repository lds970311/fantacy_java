<template>
  <div class="vuex">
    {{ store.state.mainOptions.count }}
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script lang="ts">
import {useStore} from "vuex";


export default {
  name: "VuexTest",
  props: [],
  setup() {
    const store = useStore()
    console.log()
    const add = () => {
      store.commit("mainOptions/increment")
    }
    const minus = () => {
      store.dispatch("mainOptions/jian")
    }
    return {
      store,
      add,
      minus
    }
  }
}
</script>

<style scoped>

</style>
