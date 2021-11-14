<template>
  <div>
    {{ msg }}
    <model-custom :msg="msg"></model-custom>
  </div>
</template>

<script lang="js">
import ModelCustom from "../components/ModelCustom.vue";

export default {
  name: "VModel",
  components: {
    ModelCustom
  },
  data() {
    return {
      msg: "Hello"
    }
  }
}
</script>

<style scoped>

</style>
