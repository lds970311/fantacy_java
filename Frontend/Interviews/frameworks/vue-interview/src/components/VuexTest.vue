<template>
  <div class="vuex">
    {{ store.state.mainOptions.count }}
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script lang="ts">
import {mapGetters, useStore} from "vuex";
import {useRoute} from "vue-router"

export default {
  name: "VuexTest",
  props: [],
  setup() {
    const store = useStore()
    const route = useRoute()
    console.log(store)
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
